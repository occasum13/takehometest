const ProductPageLocators = {
  buyNowBtn:                () => cy.get('a[href="/basic-product-funnel-sample/checkout"]'),
  topBackBtn:               () => cy.get('a[href="/basic-product-funnel-sample/"]').first(),
  bottomBackBtn:            () => cy.get('a[href="/basic-product-funnel-sample/"]').last(),
  productTitle:             () => cy.get('h1'),
  productPrice:             () => cy.get('.text-cyan-300'),
  productDescription:       () => cy.get('p.text-white\\/70').first()
}

export default ProductPageLocators;