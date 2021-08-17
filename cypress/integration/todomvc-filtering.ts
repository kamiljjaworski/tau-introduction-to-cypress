/// <reference types="cypress"/>

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.new-todo').type('Clean the bed{enter}');
        cy.get('.new-todo').type('Learn Cypress{enter}');
        cy.get('.new-todo').type('Use Cypress{enter}');
        cy.get(':nth-child(3) > .view > .toggle').click();

    })

    it('filter "All"', () => {
        cy.contains('All').click();
        cy.get('.todo-list li').should('have.length', 3);
        cy.contains('All').should('have.class', 'selected')
        cy.contains('Active').should('have.not.class', 'selected')
        cy.contains('Completed').should('have.not.class', 'selected')
    });

    it('filter "Active"', () => {
        cy.contains('Active').click();
        cy.get('.todo-list li').should('have.length', 2);
        cy.contains('All').should('have.not.class', 'selected')
        cy.contains('Active').should('have.class', 'selected')
        cy.contains('Completed').should('have.not.class', 'selected')
    });

    it('filter "Completed"', () => {
        cy.contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1);
        cy.contains('All').should('have.not.class', 'selected')
        cy.contains('Active').should('have.not.class', 'selected')
        cy.contains('Completed').should('have.class', 'selected')
    });
})