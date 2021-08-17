export function validateListIsEmpty() {
    cy.get('.todo-list').should('not.have.descendants', 'li');
}

export function validateListLength(expectedLength: number) {
    cy.get('.todo-list li').should('have.length', expectedLength);
}

export function clearCompleted() {
    cy.contains('Clear').click();
}

export function validateItemIsChecked(index: number, isChecked: boolean) {
    const toogle = cy.get(`:nth-child(${index}) > .view > .toggle`)
    if (isChecked) {
        toogle.should('be.checked');
    }
    else {
        toogle.should('not.be.checked');
    }
}

export function validateFilterButtontnIsSelected(name: string, isChecked: boolean) {
    const button = cy.contains(name);
    if (isChecked) {
        button.should('have.class', 'selected');
    }
    else {
        button.should('have.not.class', 'selected');
    }
}

export function navigate() {
    cy.visit('/');
}

export function addTodo(item: string) {
    cy.get('.new-todo').type(item + '{enter}')
}

export function toogleTodoByIndex(index: number) {
    cy.get(`:nth-child(${index}) > .view > .toggle`).click();
}

export function validateTodoText(index: number, expectedText: string) {
    cy.get(`:nth-child(${index})> .view > label`).should('have.text', expectedText);
}

export function validateItemGotLineThrough(index: number) {
    cy.get(`:nth-child(${index})> .view > label`).should('have.css', 'text-decoration-line', 'line-through')
}

export function showOnlyCompleted() {
    cy.contains('Completed').click();
}

export function showAll() {
    cy.contains('All').click();
}

export function showOnlyActive() {
    cy.contains('Active').click();
}
