import { fireEvent, render , screen} from "@testing-library/react"
import SignUp from "./index"



const navigateMock = vi.fn()



describe ("Testa o componente sign up",  () =>{

  vi.mock("react-router-dom" , () =>({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
    }
    
))

    test("devem haver 3 inputs na minha tela" , async () =>{

        render(<SignUp/>)

        const inputs = await screen.findAllByRole("textbox")


        expect(inputs).toHaveLength(3)
    })

    test("devem haver inputs para nome, email e senha na minha tela" , async () =>{

        render(<SignUp/>)

       const inputName = await screen.findByPlaceholderText("Insira seu nome")
       const inputEmail = await screen.findByPlaceholderText("Insira seu email")
       const inputPassword = await screen.findByPlaceholderText("Insira sua senha")


       expect(inputName).toBeInTheDocument()
       expect(inputEmail).toBeInTheDocument()
       expect(inputPassword).toBeInTheDocument()
    })
    test("devem haver um botão na tela" , async () =>{

        render(<SignUp/>)

      const button = await screen.findByRole("button")

      expect(button).toHaveTextContent("Sign Up")
    })

    test("deve haver um titulo 'Cadastra-se'" , async () =>{

        render(<SignUp/>)

      const title = await screen.findByRole("heading",{
        level:2,
      })

      expect(title).toHaveTextContent("Cadastre-se")
    })
    

    test("deve navegar para a pagina de dashboard" , async()=>{

        render (<SignUp/>)

        const button = await screen.findByRole("button")
        fireEvent.click(button)

        expect(navigateMock).toHaveBeenCalledTimes(1)



    })

    test("deve haver um link para ir para a pagina de login" , async()=>{

      render (<SignUp/>)

      const link =  screen.getByText("Já tem cadastro?Clique aqui")

      expect(link).toBeInTheDocument()



  })
    

})