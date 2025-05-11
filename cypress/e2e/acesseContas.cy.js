const { faker } = require('@faker-js/faker');

describe('Adicionar múltiplas contas com nomes aleatórios', () => {

    const nomes = Array.from({ length: 5 }, () => faker.person.fullName());
    const nome = faker.person.fullName()

    beforeEach(() => {
        cy.sessionLogin()
        cy.visit('/addConta')
    });

    nomes.forEach((nome) => {
        it(`Adicionar contas, nome: ${nome}`, () => {
            cy.contains('Contas ').click()
            cy.get('#nome').clear().type(nome)
            cy.contains('Salvar').click()
            cy.contains('Conta adicionada com sucesso!').should('be.visible')
        })
    })

    it('Deve validar que todas as contas criadas estão visíveis no DOM', () => {
        cy.contains('Contas ').click();
        cy.contains('Listar ').click()
        nomes.forEach((nome) => {
            cy.contains(nome).should('exist');
        })
    })

    it('Editar contas', () => {
        cy.visit('/contas')
        cy.get('[class="glyphicon glyphicon-edit"]').first().click()
        cy.contains('Nome').should('be.visible')
        cy.get('#nome').clear().type(nome);
        cy.contains('Salvar').click()
        cy.contains('Conta alterada com sucesso!').should('be.visible')
    });

    it('Adicionar conta com nome existente', () => {
        cy.contains('Nome').should('be.visible')
        cy.get('#nome').clear().type('Clara Silva teste');
        cy.contains('Salvar').click()
        cy.contains('Já existe uma conta com esse nome!').should('be.visible')
    });

    it('Excluir conta com movimentação', () => {
        cy.visit('/contas')
        cy.tentarExcluirConta()
        cy.contains('Conta em uso na movimentações').should('be.visible')
    });
});
