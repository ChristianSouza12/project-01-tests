

describe("Testa a pagina de sign up " , () => {
    it("Quando clicar em 'Ja tem cadastro'... deve ir para a tela de login " ,() => {


        cy.visit("/sign-up")
        cy.contains("Já tem cadastro?Clique aqui").click()
        cy.contains("Login")


    })

    it("O botão deve ter 10px de margin top" ,() => {


        cy.visit("/sign-up")
       cy.get("div").find("button").should("have.css", "marginTop") .and ("match",/10px/)


    })
})