Cypress.Commands.add('sessionLogin', () => {
    cy.session('usuario-logado', () => {
        cy.visit('/login');
        cy.contains('Login').should('be.visible')
        cy.get('#email').type('marcos.almeida773@gmail.com');
        cy.get('#senha').type('senha1234')
        cy.contains('Entrar').click()
        cy.contains('Bem vindo, Teste Automação!').should('be.visible')
    });
});
Cypress.Commands.add('tentarExcluirConta', () => {
    const frasePresente = Cypress.$('body:contains("Conta em uso na movimentações")').length > 0;

    if (!frasePresente) {
        cy.get('.glyphicon.glyphicon-remove-circle').first().click()
        cy.wait(500)
        cy.tentarExcluirConta()
    }
});
