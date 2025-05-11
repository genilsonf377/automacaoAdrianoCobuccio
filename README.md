
# Teste tecnico Grupo Adriano Corbbuio 🚀

Este projeto utiliza **Cypress** para testes automatizados de uma aplicação. Ele foi desenvolvido para validar funcionalidades e assegurar a qualidade do software com testes de interface e validações de fluxo. O projeto inclui relatórios de execução gerados automaticamente, facilitando a análise dos resultados.

## 📋 Índice
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Relatórios de Testes](#relatórios-de-testes)
- [Estrutura do Código](#estrutura-do-código)
- [Integração Contínua (CI)](#integração-contínua-ci)

### 🛠 Tecnologias
Este projeto utiliza as seguintes tecnologias:
- **Cypress**: v14.3.3 - Framework para automação de testes de interface
- **cypress-mochawesome-reporter**: v3.8.2 - Gerador de relatórios em HTML para execução de testes Cypress
- **Node.js**: Recomenda-se utilizar a versão LTS para compatibilidade
- **npm** ou **yarn**: Gerenciador de pacotes

### ⚙️ Instalação
Para instalar e configurar o projeto, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/usuario/repositorio_aqui
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

### 🚀 Uso
Para personalizar a execução dos testes, utilize as variáveis de ambiente e os comandos de configuração no Cypress. Esses recursos são úteis para adaptar o comportamento dos testes conforme o ambiente ou as credenciais de acesso.

### 📜 Scripts Disponíveis
Aqui estão alguns scripts úteis para automação e execução de tarefas do projeto:

- **Executar Cypress em modo de interface**:
  ```bash
  npm run cypress:open
  ```
- **Executar Cypress em modo headless**:
  ```bash
  npm run cypress:run
  ```
- **Gerar relatório Allure reports**:
 ### 💪 Executando os testes com Allure Reports

Este projeto utiliza o [Allure Reports](https://docs.qameta.io/allure/) para gerar relatórios detalhados de execução dos testes E2E com Cypress.

---

#### 📦 Pré-requisitos

1. Certifique-se de que o **Allure CLI** esteja instalado globalmente:

```bash
npm install -g allure-commandline --save-dev
```

2. O **Java JDK 8 ou superior** deve estar instalado em sua máquina. O Allure Reports depende do Java para gerar os relatórios.

Você pode verificar se o Java está instalado com:

```bash
java -version
```

Se o comando retornar a versão, está tudo pronto. Caso contrário, instale o Java a partir de:
[https://adoptium.net/](https://adoptium.net/)

---

#### 🚀 Executar testes e gerar o relatório

Para rodar os testes com o Allure e abrir o relatório no navegador, use o seguinte comando:

```bash
npm run test:allure
```

Esse comando faz:

1. Executa os testes Cypress com a flag `--env allure=true`.
2. Gera os arquivos de resultado no diretório `allure-results`.
3. Cria e abre automaticamente o relatório HTML em `allure-report`.

---

#### 🔧 Scripts definidos no `package.json`

```json
"scripts": {
  "e2e": "cypress run --env allure=true",
  "report:allure": "allure generate allure-results --clean -o allure-report && allure open allure-report",
  "test:allure": "npm run e2e && npm run report:allure"
}
```

---

Agora você pode visualizar um relatório interativo com detalhes de cada teste, screenshots e muito mais!



### 🗂 Estrutura do Código

Este projeto utiliza os recursos nativos do **Cypress** para organização e estruturação dos testes, o que facilita a manutenção e a reutilização do código. Veja como o projeto está organizado:

- **Commands**: Localizados em `support/`, contém comandos customizados do Cypress para encapsular interações repetitivas ou complexas, como adicionar produtos ao carrinho, validar textos e finalizar compras.

- **Env**: Variáveis de ambiente configuradas no `cypress.env.json` permitem o uso dinâmico de valores, como CPF válido e códigos de validação, garantindo flexibilidade nos testes.

- **Specs**: Localizadas na pasta `e2e/`, agrupam os testes em contextos, como cadastro, login, e fluxo de carrinho de compras. Cada spec foca em uma área específica da aplicação, com organização clara para facilitar a leitura e manutenção.

### Benefícios da Estrutura
- **Reutilização**: Os comandos customizados encapsulam lógica comum, reduzindo redundâncias.
- **Manutenção Simplificada**: Alterações nos seletores ou fluxos podem ser feitas centralizadamente em comandos ou fixtures.
- **Clareza**: A organização por contextos e uso de dados estruturados facilita a compreensão dos testes.

Essa abordagem mantém o projeto modular e facilita sua escalabilidade, melhorando a eficiência na automação de testes. 🚀

#### ⚙️ Integração com GitHub Actions

Este projeto também conta com um workflow de CI que:

* Executa os testes sempre que houver push na branch `main`
* Executa diariamente às 07:00 da manhã (UTC)
* Gera o relatório Allure
* Envia uma notificação para um webhook do Slack em caso de falha

Para isso, é necessário configurar o segredo `SLACK_WEBHOOK` no repositório do GitHub.

---

### Agradecimentos 🙏
Agradeço ao Grupo Adriano Corbbuio pela oportunidade de participar deste desafio. Utilizei Cypress para a automação dos testes, integrando com Allure Report para geração dos relatórios e webhook do Slack para notificações no CI. Foi uma experiência valiosa para aplicar boas práticas e reforçar meus conhecimentos em testes automatizados.

Atenciosamente,
Francisco Genilson.