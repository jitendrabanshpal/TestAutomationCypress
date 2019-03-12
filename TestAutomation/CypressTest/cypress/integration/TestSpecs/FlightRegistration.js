/// <reference types="Cypress" />

//Verying the Main URL
describe('Flight booking Page',function(){
    it('Successfully Load Flight Page',function(){
     cy.visit(Cypress.env('baseUrl'))
     cy.log('Successfully load the flight home page!!!')
    })
 
 })

 //Navigate to the Register Page.
describe('Navigate to Register Page',function(){
    it('Visit Register Page',function(){
        cy.contains('REGISTER').click()
        cy.title().should('eq','Register: Mercury Tours')
        cy.log('Successfully load the Register page!!!')
        cy.screenshot()
        cy.get(':nth-child(2) > :nth-child(2) > input').type(userID_Alpha())
        
    })
    
    })

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }

    function userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }