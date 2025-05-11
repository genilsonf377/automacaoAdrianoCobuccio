Cypress.Commands.add('filtrarResumoMovimentacao', (mes) => {
    cy.contains('2025').should('be.visible')
    cy.contains('10/06/2025').should('be.visible')
    cy.contains('Teste automação').should('be.visible')
    cy.get('#mes').select(mes)
    cy.get('[value="Buscar"]').click()
    cy.contains('td', '10/06/2025').should('be.visible')
})

Cypress.Commands.add('excluirMovimentacao', () => {
    cy.get('[class="glyphicon glyphicon-remove-circle"]').first().click()
    cy.contains('Movimentação removida com sucesso!').should('be.visible')
})
