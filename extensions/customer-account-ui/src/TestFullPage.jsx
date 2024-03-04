import {
    reactExtension,
    Heading,
    Page,
    
  } from '@shopify/ui-extensions-react/customer-account';
  import React from 'react';

  
  export default reactExtension(
    'customer-account.page.render',
    () => <Wishlists />,
  );
  

  function Wishlists() {
    return (
      <Page title='Test Full Page'>
          <Heading>Test Full Page For test</Heading>
      </Page>
    );
  }
  

  