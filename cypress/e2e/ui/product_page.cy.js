import LandingPageLocators from "../../support/api/locators/landing_locators";
import ProductPageLocators from "../../support/api/locators/product_locators";
import CheckoutPageLocators from "../../support/api/locators/checkout_locators";

describe('Product Page', () => {
    
    const baseUrl = Cypress.env('uiBaseUrl') + '/product';

    beforeEach(() => {
        cy.visit(baseUrl, {
            failOnStatusCode: false,
            followRedirect: false
        })
    })

    context('Mobile', () => {
    
        before(() => {
            cy.viewport('iphone-x') 
        })

        it('should successfuly display product information', () => {
            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')

            ProductPageLocators.productPrice().should('be.visible').and('contain.text', '€79.00')

            ProductPageLocators.productDescription().should('be.visible')
        })

        it('should successfuly navigate back to landing page through top `Back to the landing page` button', () => {
            ProductPageLocators.topBackBtn().click()

            LandingPageLocators.landingPageTitle().should('be.visible').and('contain.text', 'A product funnel that feels clean, focused, and easy to buy from.')
        })

        it('should successfuly navigate back to landing page through bottom `Back` button', () => {
            ProductPageLocators.bottomBackBtn().click()

            LandingPageLocators.landingPageTitle().should('be.visible').and('contain.text', 'A product funnel that feels clean, focused, and easy to buy from.')
        })

        it('should successfuly navigate to checkout page through `Buy now` button', () => {
            ProductPageLocators.buyNowBtn().click()

            CheckoutPageLocators.CheckoutPageTitle().should('be.visible').and('contain.text', 'Complete your order')
        })
    })

    context('Desktop', () => {

        before(() => {
            cy.viewport(1280,720) 
        })

        it('should successfuly display product information', () => {
            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')

            ProductPageLocators.productPrice().should('be.visible').and('contain.text', '€79.00')

            ProductPageLocators.productDescription().should('be.visible').and('contain.text', 'Designed to help you concentrate longer, reduce harsh glare, and keep your desk setup visually simple.')
        })

        it('should successfuly navigate back to landing page through top `Back to the landing page` button', () => {
            ProductPageLocators.topBackBtn().click()

            LandingPageLocators.landingPageTitle().should('be.visible').and('contain.text', 'A product funnel that feels clean, focused, and easy to buy from.')
        })

        it('should successfuly navigate back to landing page through bottom `Back` button', () => {
            ProductPageLocators.bottomBackBtn().click()

            LandingPageLocators.landingPageTitle().should('be.visible').and('contain.text', 'A product funnel that feels clean, focused, and easy to buy from.')
        })

        it('should successfuly navigate to checkout page through `Buy now` button', () => {
            ProductPageLocators.buyNowBtn().click()

            CheckoutPageLocators.CheckoutPageTitle().should('be.visible').and('contain.text', 'Complete your order')
        })
    })
})