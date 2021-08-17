export class TodoPage {
    validateListIsEmpty() {
        cy.get('.todo-list').should('not.have.descendants', 'li');
    }

    validateListLength(expectedLength: number) {
        cy.get('.todo-list li').should('have.length', expectedLength);
    }

    clearCompleted() {
        cy.contains('Clear').click();
    }

    validateItemIsChecked(index: number, isChecked: boolean) {
        const toogle = cy.get(`:nth-child(${index}) > .view > .toggle`)
        if (isChecked) {
            toogle.should('be.checked');
        }
        else {
            toogle.should('not.be.checked');
        }
    }

    validateFilterButtontnIsSelected(name: string, isChecked: boolean) {
        const button = cy.contains(name);
        if (isChecked) {
            button.should('have.class', 'selected');
        }
        else {
            button.should('have.not.class', 'selected');
        }
    }

    navigate() {
        cy.visit('/');
    }

    addTodo(item: string) {
        cy.get('.new-todo').type(item + '{enter}')
    }

    toogleTodoByIndex(index: number) {
        cy.get(`:nth-child(${index}) > .view > .toggle`).click();
    }

    validateTodoText(index: number, expectedText: string) {
        cy.get(`:nth-child(${index})> .view > label`).should('have.text', expectedText);
    }

    validateItemGotLineThrough(index: number) {
        cy.get(`:nth-child(${index})> .view > label`).should('have.css', 'text-decoration-line', 'line-through')
    }

    showOnlyCompleted() {
        cy.contains('Completed').click();
    }

    showAll() {
        cy.contains('All').click();
    }

    showOnlyActive() {
        cy.contains('Active').click();
    }
}