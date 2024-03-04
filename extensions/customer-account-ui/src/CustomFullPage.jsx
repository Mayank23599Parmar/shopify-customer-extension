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
      <Page title='Wishlists'>
          <Heading>Custom wishlist Page</Heading>
      </Page>
    );
  }
  

  