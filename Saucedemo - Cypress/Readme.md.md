# 🧪 Automação de Testes E2E - SauceDemo (Cypress)

Este repositório contém o projeto de automação de testes End-to-End (E2E) para a aplicação web [SauceDemo](https://www.saucedemo.com/), desenvolvido com **Cypress**.

O objetivo deste projeto é validar o **fluxo principal (caminho feliz)** de uma jornada completa de e-commerce: autenticação, adição de itens ao carrinho, preenchimento de dados de entrega, checkout e encerramento de sessão.

---

## 📌 Funcionalidades Testadas

- [x] **Login:** Autenticação de usuário válido com acesso à vitrine de produtos.
- [x] **Carrinho de Compras:** Adição de múltiplos produtos e validação do contador de itens.
- [x] **Checkout - Informações:** Preenchimento de dados do cliente (Nome, Sobrenome, CEP).
- [x] **Checkout - Confirmação:** Validação da página de resumo e finalização do pedido.
- [x] **Navegação de Retorno:** Retorno à página de produtos após compra bem-sucedida.
- [x] **Logout:** Encerramento seguro da sessão do usuário.

---

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/):** Framework de testes automatizados E2E.
- **Node.js:** Ambiente de execução JavaScript.
- **JavaScript (ES6+):** Linguagem utilizada para escrita dos testes.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, garante que você tem instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Gerenciador de pacotes `npm` (instalado junto com o Node)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar o Cypress:**

   - **Modo Interativo (Test Runner com interface gráfica):**
     ```bash
     npx cypress open
     ```
     *Selecione "E2E Testing", escolha seu navegador preferido e execute a spec `saucedemo.cy.js`.*

   - **Modo Headless (Execução via terminal):**
     ```bash
     npx cypress run
     ```

---

## 📂 Estrutura do Projeto

```text
├── cypress/
│   ├── e2e/
│   │   └── saucedemo.cy.js    # Script de teste E2E do caminho feliz
│   └── support/               # Configurações e comandos customizados do Cypress
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```

---

## 💡 Dicas do Mentor QA (Melhorias Futuras)

Para levar sua automação para o próximo nível e torná-la ainda mais profissional, aqui estão algumas recomendações:

1. **Evitar o uso de `cy.wait()` fixo:**
   - O uso de tempos fixos (ex: `cy.wait(1000)`) deixa a execução mais lenta e instável (*flaky tests*). O Cypress possui assincronismo embutido e espera elementos aparecerem na tela automaticamente!

2. **Aplicar o Padrão Page Object Model (POM) ou Custom Commands:**
   - Separar seletores e ações em arquivos próprios para reaproveitar código em novos testes.

3. **Massa de Dados Dinâmica / Fixtures:**
   - Utilizar arquivos JSON dentro de `cypress/fixtures/` ou bibliotecas como `@faker-js/faker` para gerar dados de formulário dinamicamente.

---

👨‍💻 **Desenvolvido por:** Luciano Silva