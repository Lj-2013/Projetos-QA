describe('Saucedemo - Caminho feliz (Login, Carrinho de compras e Logout)', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

    it('Deve realizar login, adicionar produtos ao carrinho, finalizar a compra e realizar logout', () => {
    // Realizar login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click() 
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
    cy.wait(1000) 
      
  
    // Adicionar produtos ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '2')
    cy.wait(1000)
    

    // Acessar o carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')
    cy.get('.title').should('have.text', 'Your Cart')
    cy.wait(1000)
    
     
    // Finalizar a escolhas
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('.title').should('have.text', 'Checkout: Your Information')
    cy.wait(1000)
    

    // Preencher informações do usuário
    cy.get('[data-test="firstName"]').type('Luciano')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('50000-000 ')
    cy.wait(1000)
    

    // Iniciar o processo de checkout
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.title').should('have.text', 'Checkout: Overview')
    cy.wait(1000)
    

    // Finalizar checkout
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.title').should('have.text', 'Checkout: Complete!')
    cy.wait(1000)
    

    // Voltar para a página de produtos
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
    cy.wait(1000)

    // Realizar logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    })

    
})

