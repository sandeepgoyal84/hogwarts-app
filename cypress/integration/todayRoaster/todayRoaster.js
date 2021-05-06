/// <reference types="cypress" />
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
    cy.visit('/');
});
Given('Ensure professor {string} is present', (teacher) => {
    cy.get(`[data-testid="twcf_col2_${teacher}"]`).should('have.value', 'Present');
});
Given('Ensure professor {string} and {string} are present', (teacher, headTeacher) => {
    cy.get(`[data-testid="twcf_col2_${teacher}"]`).should('have.value', 'Present');
    cy.get(`[data-testid="twcf_col2_${headTeacher}"]`).should('have.value', 'Present');
});

When('Mark professor {string} as absent', (teacher) => {
    cy.get(`[data-testid="twcf_col2_${teacher}"]`).select('Absent');
});

When('Mark professors {string} and {string} as absent', (teacher, headTeacher) => {
    cy.get(`[data-testid="twcf_col2_${teacher}"]`).select('Absent');
    cy.get(`[data-testid="twcf_col2_${headTeacher}"]`).select('Absent');
});

Then('Now student {string} should have {string} as assigned teacher', { timeout: 90000 }, (student, teacher) => {
    cy.get(`[data-testid="tcfr_col3_${student}"]`).should('contain.text', teacher);
});