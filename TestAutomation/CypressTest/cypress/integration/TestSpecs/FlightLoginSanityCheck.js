/// <reference types="Cypress" />


//Verying the Main URL
describe('Flight booking Page',function(){
   it('Successfully Load Flight Page',function(){
    cy.visit(Cypress.env('baseUrl'))
    cy.log('Successfully load the flight home page!!!')
   })

})

//Navigate to the Home Page.
describe('Navigate to Home Page',function(){
    it('Visit Home Page',function(){
        cy.contains('Home').click()        
        cy.title().should('eq','Welcome: Mercury Tours')
        cy.log('Successfully load the Home page!!!')
        cy.screenshot()
    })
    
    })

//Navigate to the Hotels Page.
describe('Navigate to Hotels Page',function(){
    it('Visit Hotels Page',function(){
        cy.contains('Hotels').click()
        cy.title().should('eq','Under Construction: Mercury Tours')
        cy.get('p > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('This section of our web site is currently under construction.')
        cy.log('Successfully load the Hotels page!!!')
        cy.screenshot()
    })
    
    })

//Navigate to the Cruises Page.
describe('Navigate to Cruises Page',function(){
        it('Visit Cruises Page',function(){
            cy.contains('Cruises').click()
            cy.title().should('eq','Cruises: Mercury Tours')
            cy.log('Successfully load the Cruises page!!!')
            cy.screenshot()
            
        })
        
        })

//Navigate to the Register Page.
describe('Navigate to Register Page',function(){
    it('Visit Register Page',function(){
        cy.contains('REGISTER').click()
        cy.title().should('eq','Register: Mercury Tours')
        cy.log('Successfully load the Register page!!!')
        cy.screenshot()
        
    })
    
    })
    
//Navigate to the Sign-on Page.
describe('Navigate to Sign-on Page',function(){
    it('Visit Sign-on Page',function(){
        cy.contains('SIGN-ON').click()        
        cy.title().should('eq','Sign-on: Mercury Tours')
        cy.log('Successfully load the SIGN-ON page!!!')
        cy.screenshot()
        
    })
    
    })



