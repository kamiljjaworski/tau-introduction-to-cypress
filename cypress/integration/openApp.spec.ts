/// <reference types="cypress"/>

it('open app', () => {
    cy.visit('/');
})

it('interact with elements', () => {
    cy.visit('/');
    cy.get('.new-todo', { timeout: 4000 }).type('Learn Cypress' + '{enter}')
})