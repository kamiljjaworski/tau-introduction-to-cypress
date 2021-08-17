/// <reference types="cypress"/>

it('open app', () => {
    cy.visit('/');
})

it('interact with element', () => {
    cy.visit('/');
    cy.get('.new-todo', { timeout: 4000 }).type('Learn Cypress' + '{enter}')
})

it('add item to todo list', () => {
    const item: string = 'Learn Cypress';
    cy.visit('/');
    cy.get('.new-todo').type(item + '{enter}');
    cy.get('label').should('have.text', item);
    cy.get('.toggle').should('not.be.checked');
    cy.get('.toggle').click();
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    cy.contains('Clear').click();
    cy.get('.todo-list').should('not.have.descendants', 'li');
})