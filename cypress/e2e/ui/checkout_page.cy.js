import LandingPageLocators from "../../support/ui/locators/landing_locators";
import ProductPageLocators from "../../support/ui/locators/product_locators";
import CheckoutPageLocators from "../../support/ui/locators/checkout_locators";

describe('Checkout Page', () => {

    const baseUrl = Cypress.env('uiBaseUrl') + '/checkout'

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
    
        it('should successfuly place an order', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('be.visible').and('contain.text', 'Order placed successfully.')
        })

        it('should fail to place an order without any data', () => {
            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        }) 

        it('should fail to place an order without valid data', () => {
            CheckoutPageLocators.nameFormField().type('1')
            CheckoutPageLocators.emailFormField().type('1@1')
            CheckoutPageLocators.addressFormField().type('1')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
            
            CheckoutPageLocators.nameFormError().should('be.visible').and('contain.text', 'The full name is required')
            CheckoutPageLocators.emailFormError().should('be.visible').and('contain.text', 'Invalid email')
            CheckoutPageLocators.addressFormError().should('be.visible').and('contain.text', 'The address is required')
        }) 

        it('should fail to place an order without a name', () => {
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        }) 
        
        it('should fail to place an order without an email', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        })   

        it('should fail to place an order without an address', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        })   
    })

    context('Desktop', () => {

        before(() => {
            cy.viewport('iphone-x') 
        })

        it('should successfuly place an order', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('be.visible').and('contain.text', 'Order placed successfully.')
        })

        it('should fail to place an order without any data', () => {
            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        }) 

        it('should fail to place an order without valid data', () => {
            CheckoutPageLocators.nameFormField().type('1')
            CheckoutPageLocators.emailFormField().type('1@1')
            CheckoutPageLocators.addressFormField().type('1')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
            
            CheckoutPageLocators.nameFormError().should('be.visible').and('contain.text', 'The full name is required')
            CheckoutPageLocators.emailFormError().should('be.visible').and('contain.text', 'Invalid email')
            CheckoutPageLocators.addressFormError().should('be.visible').and('contain.text', 'The address is required')
        }) 

        it('should fail to place an order without a name', () => {
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        }) 
        
        it('should fail to place an order without an email', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.addressFormField().type('Address 55')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        })   

        it('should fail to place an order without an address', () => {
            CheckoutPageLocators.nameFormField().type('Joao Paulo')
            CheckoutPageLocators.emailFormField().type('joaopaulo@gmail.com')

            CheckoutPageLocators.placeOrderBtn().click()
            CheckoutPageLocators.successMessage().should('not.exist')
        })   
    })    
});

