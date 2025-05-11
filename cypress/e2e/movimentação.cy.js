describe('Login dentro da plataforma', () => {
    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/movimentacao');
    });

    it('Vincular movimentação, conta e situação status_pago', () => {
        cy.atrelarContaAMovimentacao({
                tipoMovimentacao: 'Receita',
                statusId: 'status_pago'
            })
    });

    it('Vincular movimentação, conta e situação status_pendente', () => {
        cy.atrelarContaAMovimentacao({
            tipoMovimentacao: 'Despesa',
            statusId: 'status_pendente'
        })
    });
});
