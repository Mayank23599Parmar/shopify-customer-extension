import {
    Heading,
    reactExtension,
    Image,
    PaymentIcon,
    Grid,
    View,
    BlockStack,
    InlineStack,
    Link ,
     Card,Text,TextBlock,InlineLayout,Icon, Banner
  } from '@shopify/ui-extensions-react/customer-account';
import { useEffect, useState } from 'react';
  
  export default reactExtension(
    'customer-account.profile.block.render',
    () => <Extension />,
  );
  
  function Extension() {
    const [customer, setCustomer] = useState(null);
    const getCustomerNameQuery = {
        query: `query {
          customer {
            firstName
            lastName
          }
        }`
      };
    useEffect(() => {
        fetch("shopify://customer-account/api/unstable/graphql.json",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(getCustomerNameQuery),
          }).then((response) => response.json())
          .then(({data: {customer}}) => {
            setCustomer(customer)
          }).catch(console.error);
      },[]);
      console.log(customer,'customerNamecustomerName')
    return <>
       <Card padding>
      <InlineStack inlineAlignment="center" spacing="tight">
        <Text>Grow your garden with more plants from your wishlist.</Text>
        <Link to="extension:customer-account-ui/">View wishlist</Link>
      </InlineStack>
    </Card>
    <Grid
      columns={['50%', '50%']}
      rows={[ 'auto']}
      spacing="base"
    >
    <View>
    <Heading level={1}>{customer && `Welcome , ${customer.firstName} ${customer.lastName}`}</Heading>
    </View>
    </Grid>
    <Image 
    aspectRatio={16/2}
    source="https://cdn.shopify.com/s/files/1/0645/1006/6846/files/theme_cover_image.jpg?v=1709022378" />
    	<Card padding>
      <Grid
        columns={['fill', 'auto']}
        spacing="base"
        minInlineSize="fill"
        blockAlignment="start"
      >
        <BlockStack spacing="loose">
          <Heading>Your Payment Methods</Heading>
          <Grid
      columns={['auto', 'auto','auto', 'auto']}
      rows={[ 'auto']}
      spacing="base"
      blockAlignment={'center'}
    >
    <PaymentIcon name="visa" />
    <PaymentIcon name="master" />
    <PaymentIcon name="american-express" />
    <PaymentIcon name="rupay" />
    </Grid>
    <Banner
      status="critical"
      title="Your payment details couldn’t be verified. Check your card details and try again."
    />
        </BlockStack>
        <BlockStack spacing="loose">
          
        </BlockStack>
      </Grid>
    </Card>
    </>;
  }
  