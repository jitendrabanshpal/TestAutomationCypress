 <reference types="Cypress" />
// before('grab generated user data', function (){
//     let data = cy.readFile("Cypresstest131.json", {log:true, timeout: 4000});
//      data.its('name').should('eq', 'Eliza')
// })

Describe('The Home Page', function() {
    it('successfully loads', function() {
     // cy.visit('http://localhost:8081') // change URL to match your dev URL
       // cy.visit(Cypress.env('loginUrl'))
        cy.visit('file:///C:/Users/kajalk/Desktop/metest.html')
        // cy.get('[name="fromPort"]').select('Boston')
        // cy.get('[name="toPort"]').select('London')
        // //cy.get('form > .container > .btn').click()
        // cy.contains('Find Flights').click()
        // cy.wait(2000)
        // cy.get('h3').contains('Flights from Boston to London:')
        // cy.log('Navigate to Reservation Page Successfully !!!')
        // cy.title().should('eq','BlazeDemo - reserve')
        // cy.screenshot()
       
    })
})