import LandingPageLocators from "../../support/api/locators/landing_locators";
import ProductPageLocators from "../../support/api/locators/product_locators";
import CheckoutPageLocators from "../../support/api/locators/checkout_locators";

describe('UI e2e testing', () => {

    const baseUrl = Cypress.env('uiBaseUrl')

    context('Landing Page - Mobile', () => {

        beforeEach(() => {
            cy.viewport('iphone-x') 
            cy.visit(baseUrl)
        })
        
        it('should successfuly checkout the product', () => {
            LandingPageLocators.productBtn().should('be.visible')
            LandingPageLocators.productBtn().click()

            ProductPageLocators.buyNowBtn().should('be.visible')
            ProductPageLocators.buyNowBtn().click()

            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('be.visible').and('contain.text', 'Order placed successfully.')
        })

        it('should successfuly navigate to product from `See Product` button', () => {
            LandingPageLocators.productBtn().should('be.visible')
            LandingPageLocators.productBtn().click()

            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')
        })

        it('should successfuly navigate to product from `Explore features` button', () => {
            LandingPageLocators.exploreBtn().should('be.visible')
            LandingPageLocators.exploreBtn().click()    

            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')
        })
    })

    context('Landing Page - Desktop', () => {

        beforeEach(() => {
            cy.viewport(1280, 720) 
            cy.visit(baseUrl)
        })
        
        it('should successfuly checkout the product', () => {
            LandingPageLocators.productBtn().should('be.visible')
            LandingPageLocators.productBtn().click()

            ProductPageLocators.buyNowBtn().should('be.visible')
            ProductPageLocators.buyNowBtn().click()

            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('be.visible').and('contain.text', 'Order placed successfully.')
        })

        it('should successfuly navigate to product from `See Product` button', () => {
            LandingPageLocators.productBtn().should('be.visible')
            LandingPageLocators.productBtn().click()

            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')
        })

        it('should successfuly navigate to product from `See Product` button', () => {
            LandingPageLocators.productBtn().should('be.visible')
            LandingPageLocators.productBtn().click()    

            ProductPageLocators.productTitle().should('be.visible').and('contain.text', 'FocusLamp')
        })
    })
})