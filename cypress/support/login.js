import { faker } from '@faker-js/faker'

Cypress.Commands.add('CadastroDeUsuarioComSucesso', () => {
    Cypress.env('USER_EMAIL', faker.internet.email())
    cy.contains('Login').should('be.visible')
    cy.contains('Novo usuário?').should('be.visible').click()
    cy.get('#nome').type('Teste Automação');
    cy.get('#email').type(Cypress.env('USER_EMAIL'));
    cy.get('#senha').type(Cypress.env('USER_PASSWORD'))
    cy.get("[value='Cadastrar']").click()
    cy.contains('Usuário inserido com sucesso').should('be.visible')
})
Cypress.Commands.add('login', (userName, password) => {
    cy.contains('Login').should('be.visible')
    cy.get('#email').type(userName);
    cy.get('#senha').type(password)
    cy.contains('Entrar').click()
})