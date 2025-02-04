
import {fireEvent, render,screen} from "@testing-library/react"
import Login from "./index"







const navigateMock = vi.fn()

describe("Testa o componente de login" , () => {

    vi.mock("react-router-dom" , () => ({
        useNavigate (){
            return navigateMock
        },
        Link:vi.fn().mockImplementation((props) => props.children)

    }))



    test("Deve haver um titulo escrito 'Sign In'", async () =>{
        

    render(<Login/>)

    const title = await screen.findByRole("heading",{
        name:"Sign In"
    })

    expect(title).toBeInTheDocument()
    })

    test("Deve haver dois inputs na pagina", async() => {

        render(<Login/>)
    
        const inputs = await screen.findAllByRole("textbox")
    
        expect(inputs).toHaveLength(2)
    
       }) 
    

       test("Deve haver um botão na pagina", async () =>{
        

        render(<Login/>)
    
        const button = await screen.findByRole("button")
            
        
        expect(button).toBeInTheDocument()




    
       })

       
       test("deve haver um input para email" ,async () =>{

        render(<Login/>)

        const inputEmail = await screen.findByPlaceholderText("Insira seu Email.")

        expect(inputEmail).toBeInTheDocument()

    })


    
    test("deve haver um input para senha" ,async () =>{

        render(<Login/>)

        const inputPassword = await screen.findByPlaceholderText("Insira sua senha.")

        expect(inputPassword).toBeInTheDocument()

    })
    })

    test("deve haver um input para senha" ,async () =>{

        render(<Login/>)

        const button = await screen.findByRole("button")
        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1)

    })

    test("deve haver um link para a pagina de sign up" ,async () =>{

        render(<Login/>)

        const link = await screen.findByText("Não tem cadastro?Clique aqui")

        expect(link).toBeInTheDocument()
    })


