Cypress.on('uncaught:exception', (err, runnable) => {
    // Impede que o Cypress falhe o teste ao capturar exceções da aplicação
    return false;
  });
  
import './commands'
import './utils'
import './login'
import './Movimentacao'
import './resumo'
import '@shelex/cypress-allure-plugin'