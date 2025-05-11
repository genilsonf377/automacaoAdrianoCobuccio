describe('Login dentro da plataforma', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Cadastro de usuário com sucesso', () => {
        cy.CadastroDeUsuarioComSucesso()
    });

    it('login com sucesso', () => {
        cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        cy.contains('Bem vindo, Teste Automação!').should('be.visible')
    });

    it('login com usuário não cadastrado', () => {
        cy.login(Cypress.env('EMAIL_INVALID'), Cypress.env('PASSWORD_INVALID'))
        cy.contains('Problemas com o login do usuário').should('be.visible')
    });
    
});
