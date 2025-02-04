import PokemonDetail from "."

import {render,screen} from "@testing-library/react"
import { fetchPokemonDetail } from "../../services/pokemonService"
import { faker } from "@faker-js/faker"
import * as rrd from "react-router-dom"

const mockFn = vi.fn(fetchPokemonDetail)
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async() =>{

    return{
        id:1,
        image:faker.image.urlPicsumPhotos(),
        name:"Pikachu",
        type:"Elétrico"
    }
})

describe("testa o componente de Pokemon Detail" , () => {

    vi.mock("react-router-dom",() => {
        return{
            useParams:() => ({
                id:1,

            }),
            Link:vi.fn().mockImplementation((props) => props.children)
        }
    })


    test("Deve haver um titulo na pagina" , async () => {

        render(<PokemonDetail   fetchPokemonDetail={mockFetchPokemonDetailFn}/>)

        const title = await screen.findByText("Pikachu")
        expect(title).toBeInTheDocument()

    } )


    test("Deve haver um link para voltar" , async () => {

        render(<PokemonDetail   fetchPokemonDetail={mockFetchPokemonDetailFn}/>)

        const link = await screen.findByText("Voltar")
        expect(link).toBeInTheDocument()

    } )

    test("Deve validar quando nao vier um parametro na rota" , async () => {


        vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({id:"0"}))

        render(<PokemonDetail   fetchPokemonDetail={mockFetchPokemonDetailFn}/>)

       const errorText = await screen.findByText("O id não é válido.")

       expect(errorText).toBeInTheDocument()

    } )
})