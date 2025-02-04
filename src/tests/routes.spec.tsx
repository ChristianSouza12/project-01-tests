import { render , screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"




describe  ( "testa o componente MainRoutes" , () => {
    test("deve renderizar a pagina de login" , async() =>{

        render(<MemoryRouter initialEntries={["/"]}>
            <MainRoutes/>
        </MemoryRouter>)

            const title = screen.getByText("Sign In")
            expect(title).toBeInTheDocument()
    })

    test("deve renderizar a pagina de cadastro" , async() =>{

        render(<MemoryRouter initialEntries={["/sign-up"]}>
            <MainRoutes/>
        </MemoryRouter>)

            const title = await screen.findByRole("heading", {
                name:"Cadastre-se"
            })
            expect(title).toBeInTheDocument()
    })

    test("deve renderizar a pagina de dashboard" , async() =>{

        render(<MemoryRouter initialEntries={["/dashboard"]}>
            <MainRoutes/>
        </MemoryRouter>)

            const title = screen.getByText("Dashboard")
            expect(title).toBeInTheDocument()
    })
    test("deve renderizar uma rota not found" , async() =>{

        render(<MemoryRouter initialEntries={["/qualquer rota"]}>
            <MainRoutes/>
        </MemoryRouter>)

            const title = screen.getByText("404 Page Not Found")
            expect(title).toBeInTheDocument()
    })

    
})