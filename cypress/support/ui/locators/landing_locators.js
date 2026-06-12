const LandingPageLocators = {
// Since we don't have unique Ids, we can either grab its xPath or if there is another unique attribute, we can use them. In this case I'll be using the href itself which is the most reliable given this scenario
  productBtn:             () => cy.get('a[href="/basic-product-funnel-sample/product"]'),
  exploreBtn:             () => cy.get('a[href="/basic-product-funnel-sample/product#features"]'),
  landingPageTitle:       () => cy.get('h1'),
}

export default LandingPageLocators;