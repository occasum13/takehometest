const CheckoutPageLocators = {
  nameFormField:           () => cy.get('#fullName'),
  nameFormError:           () => cy.get('#fullName ~ span'),
  emailFormField:          () => cy.get('#email'),
  emailFormError:          () => cy.get('#email ~ span'),
  addressFormField:        () => cy.get('#address'), 
  addressFormError:        () => cy.get('#address ~ span'),
  placeOrderBtn:           () => cy.get('button[type="submit"]'),
  backBtn:                 () => cy.get('a[href="/basic-product-funnel-sample/product"]'),
  successMessage:          () => cy.get('[role="status"]'),
  CheckoutPageTitle:       () => cy.get('h1'),
}

export default CheckoutPageLocators;