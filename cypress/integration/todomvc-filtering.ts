/// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todoPage";

describe('filtering', () => {
    const todoPage = new TodoPage();
    beforeEach(() => {
        todoPage.navigate();
        todoPage.addTodo('Clean the bed');
        todoPage.addTodo('Learn Cypress');
        todoPage.addTodo('Use Cypress');
        todoPage.addTodo('Clean the bed');
        todoPage.toogleTodoByIndex(3);
    })

    it('filter "All"', () => {
        todoPage.showAll();
        todoPage.validateListLength(4);
        todoPage.validateFilterButtontnIsSelected('All', true);
        todoPage.validateFilterButtontnIsSelected('Active', false);
        todoPage.validateFilterButtontnIsSelected('Completed', false)
    });

    it('filter "Active"', () => {
        todoPage.showOnlyActive();
        todoPage.validateListLength(3);
        todoPage.validateFilterButtontnIsSelected('All', false);
        todoPage.validateFilterButtontnIsSelected('Active', true);
        todoPage.validateFilterButtontnIsSelected('Completed', false)
    });

    it('filter "Completed"', () => {
        todoPage.showOnlyCompleted();
        todoPage.validateListLength(1);
        todoPage.validateFilterButtontnIsSelected('All', false);
        todoPage.validateFilterButtontnIsSelected('Active', false);
        todoPage.validateFilterButtontnIsSelected('Completed', true)
    });
})