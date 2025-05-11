const { gerarData } = require('./utils')
import { faker } from '@faker-js/faker'

Cypress.Commands.add('atrelarContaAMovimentacao', ({
    tipoMovimentacao, statusId
}) => {
    const dataTransacao = gerarData();
    const dataPagamento = gerarData(30);
    cy.get('#tipo').select(tipoMovimentacao);
    cy.get('#data_transacao').type(dataTransacao);
    cy.get('#data_pagamento').type(dataPagamento);
    cy.get('#descricao').type('Teste automação');
    cy.get('#interessado').type('João Almeida');
    cy.get('#valor').type(faker.finance.amount());
    cy.get(`#${statusId}`).click();
    cy.contains('Salvar').click();
    cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
});
