describe('Login dentro da plataforma', () => {
    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/extrato');
    });

    it('Filtrar pelas movimentações', () => {
        cy.filtrarResumoMovimentacao('Maio')
        cy.filtrarResumoMovimentacao('Junho')
    });
    
    it('Excluir movimentações', () => {
        cy.excluirMovimentacao()
    });
    
});
