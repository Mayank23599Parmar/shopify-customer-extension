// @ts-check

/**
* @typedef {import("../generated/api").RunInput} RunInput
* @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
*/

/**
* @type {FunctionRunResult}
*/
const NO_CHANGES = {
  operations: [],
};

/**
* @param {RunInput} input
* @returns {FunctionRunResult}
*/
export function run(input) {
  const configuration = JSON.parse(
    input?.paymentCustomization?.metafield?.value ?? "{}"
  );
  const data={...JSON.parse(configuration)}


  const cartTotal = parseFloat(input.cart.cost.totalAmount.amount ?? "0.0");
  // Use the configured cart total instead of a hardcoded value
  console.log(cartTotal, data.cartTotal)
  if (cartTotal < data.cartTotal) {
    console.error("Cart total is not high enough, no need to hide the payment method.");
    return NO_CHANGES;
  }

  // Use the configured payment method name instead of a hardcoded value
  const hidePaymentMethod = input.paymentMethods
    .find(method => method.name.includes(data.paymentMethodName));

  if (!hidePaymentMethod) {
    return NO_CHANGES;
  }

  return {
    operations: [{
      hide: {
        paymentMethodId: hidePaymentMethod.id
      },
    }]
  };
};
