/// <reference types="cypress"/>

import * as todoPage from "../functions/todoPage";

describe('actions', () => {
    beforeEach(() => {
        todoPage.navigate();
    })

    it('open app', () => {
    })

    it('interact with element', () => {
        todoPage.addTodo('Learn Cypress');
    })

    it('add item to todo list', () => {
        const item1: string = 'Learn Cypress';
        const item2: string = 'Use Cypress';
        todoPage.addTodo(item1)
        todoPage.addTodo(item2)
        todoPage.validateTodoText(2, item1);
        todoPage.validateTodoText(1, item2);
        todoPage.validateItemIsChecked(1, false);
        todoPage.validateItemIsChecked(2, false);
        todoPage.toogleTodoByIndex(2);
        todoPage.validateItemGotLineThrough(2);
        todoPage.toogleTodoByIndex(1);
        todoPage.clearCompleted();
        todoPage.validateListIsEmpty();
    })
});