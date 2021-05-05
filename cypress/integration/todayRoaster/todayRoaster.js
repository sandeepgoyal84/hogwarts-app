/// <reference types="cypress" />
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
    cy.visit('/');
});
Given('Ensure professor {string} is present', (teacher) => {
    cy.get('[data-testid="ddw_' + teacher + '"]').should('have.value', 'Present');
});
Given('Ensure professor {string} and {string} are present', (teacher, headTeacher) => {
    cy.get('[data-testid="ddw_' + teacher + '"]').should('have.value', 'Present');
    cy.get('[data-testid="ddw_' + headTeacher + '"]').should('have.value', 'Present');
});

When('Mark professor {string} as absent', (teacher) => {
    cy.get('[data-testid="ddw_' + teacher + '"]').select('Absent');
});

When('Mark professors {string} and {string} as absent', (teacher, headTeacher) => {
    cy.get('[data-testid="ddw_' + teacher + '"]').select('Absent');
    cy.get('[data-testid="ddw_' + headTeacher + '"]').select('Absent');
});

Then('Now student {string} should have {string} as assigned teacher', { timeout: 90000 }, (student, teacher) => {
    cy.get('[data-testid="lbl_Col3value_' + student + '"]').should('contain.text', teacher);
});