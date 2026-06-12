import LandingPageLocators from "../../support/ui/locators/landing_locators";
import ProductPageLocators from "../../support/ui/locators/product_locators";
import CheckoutPageLocators from "../../support/ui/locators/checkout_locators";

describe('Landing Page', () => {

    const baseUrl = Cypress.env('uiBaseUrl')

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    context('Mobile', () => {

        before(() => {
            cy.viewport('iphone-x') 
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

    context('Desktop', () => {

        before(() => {
            cy.viewport(1280, 720) 
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