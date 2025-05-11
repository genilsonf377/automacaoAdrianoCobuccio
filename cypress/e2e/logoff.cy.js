describe('Deslogar da plataforma', () => {
    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/');
    });

    it('Deslogar da plataforma', () => {
        cy.contains('Sair').should('be.visible').click()
        cy.contains('Entrar').should('be.visible')
    })
})