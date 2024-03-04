import {
  Button,
  CustomerAccountAction,
  TextBlock,
  reactExtension,
  useApi,
  ChoiceList,
  Choice
} from "@shopify/ui-extensions-react/customer-account";
import { useCallback, useState } from "react";

export default reactExtension(
  "customer-account.order.action.render",
  () => <MenuActionExtension />
);

function MenuActionExtension() {
  const api = useApi()
  const [selected, setSelected] = useState("yes");

  const handleChange = useCallback((value) => setSelected(value), []);
  console.log(api, selected, 'apiapi')
  return <CustomerAccountAction
    title="My Title"
    primaryAction={
      <Button
        onPress={() => {
          api.close();
        }}
      >
        my primaryAction
      </Button>
    }
  >
    <>
      <TextBlock>Give Review on this order. are you satisfied or not? </TextBlock>
      <ChoiceList value={selected} onChange={handleChange}>
        <Choice id="yes">Yes</Choice>
        <Choice id="no">No</Choice>
      </ChoiceList>
    </>
  </CustomerAccountAction>
}