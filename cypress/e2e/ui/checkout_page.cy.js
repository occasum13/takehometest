import LandingPageLocators from "../../support/api/locators/landing_locators";
import ProductPageLocators from "../../support/api/locators/product_locators";
import CheckoutPageLocators from "../../support/api/locators/checkout_locators";

describe('Checkout Page', () => {

    const baseUrl = Cypress.env('uiBaseUrl'+'/product')

    context('Checkout Page - Mobile', () => {
        beforeEach(() => {
            cy.viewport('iphone-x') 
            cy.visit(baseUrl)
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
            
            CheckoutPageLocators.nameFormError().should('be.visible').and('should.contain', 'The full name is required')
            CheckoutPageLocators.emailFormError().should('be.visible').and('should.contain', 'Invalid email')
            CheckoutPageLocators.addressFormError().should('be.visible').and('should.contain', 'The address is required')
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

    context('Checkout Page - Desktop', () => {
        beforeEach(() => {
            cy.viewport(1280,720) 
            cy.visit(baseUrl + '/checkout')
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
            
            CheckoutPageLocators.nameFormError().should('be.visible').and('should.contain', 'The full name is required')
            CheckoutPageLocators.emailFormError().should('be.visible').and('should.contain', 'Invalid email')
            CheckoutPageLocators.addressFormError().should('be.visible').and('should.contain', 'The address is required')
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

