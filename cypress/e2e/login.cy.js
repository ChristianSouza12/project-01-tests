describe('testa a pagina de login', () => {
  it('Quando clicar em login , deve ir para a pagina de dashboard', () => {
    cy.visit('/')
    cy.intercept("GET", "http://localhost:3000/pokemon",{
      fixture:"pokemons.json"
    } )
    cy.contains("Login").click()
    cy.contains("Dashboard") 
  })

  it('Quando clicar em Sign Up deve ir para a pagina de cadastro', () => {
    cy.visit('/')
    
    cy.contains("Não tem cadastro?Clique aqui").click()
    cy.contains("Cadastre-se") 
  })

  it('Na pagina de sign up deve haver 3 inputs,de nome , de email e de senha', () => {
    cy.visit('/')
    
    cy.contains("Não tem cadastro?Clique aqui").click()
    cy.contains("Cadastre-se") 
    cy.get('input[name="name"]').should("have.attr", "placeholder", "Insira seu nome")
    cy.get('input[name="email"]').should("have.attr", "placeholder", "Insira seu email")
    cy.get('input[name="password"]').should("have.attr", "placeholder", "Insira sua senha")
  })


  it('Quando clicar em login , deve ir para a pagina de dashboard e ter uma lista com 3 pokemons', () => {
    cy.visit('/')
    cy.intercept("GET", "http://localhost:3000/pokemon",{
      fixture:"pokemons.json"
    } )
    cy.contains("Login").click()
    cy.contains("Dashboard") 
    cy.get("h2").should("have.length",3)
   
  })
  it('Nessa lista deve haver o Pikachu,Rotom e o Charmander', () => {
    cy.visit('/')
    cy.intercept("GET", "http://localhost:3000/pokemon",{
      fixture:"pokemons.json"
    } )
    cy.contains("Login").click()
    cy.contains("Dashboard") 
   cy.contains("Pikachu")
   cy.contains("Rotom")
   cy.contains("Charmander")
   
  })

  it("O botão deve ter 10px de margin top" ,() => {


    cy.visit("/sign-up")
   cy.get("div").find("button").should("have.css", "marginTop") .and ("match",/10px/)


})
})