import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            superHeroes: []
        }
    }

    componentDidMount() {
        console.log('Se acaba de montar');
        this.getSuperHeroes()
    }

    getSuperHeroes = async () => {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
        const resp = await fetch(url)

        // const data = await resp.json()
        // const {results} = data

        const { results } = await resp.json()

        this.setState({
            superHeroes: results
        })
    }

    render() {
        return (
            <Container>
                <h1 color="white" >Lista de super heroes</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.superHeroes.map((heroe, index) => (
                            <Cards heroe={heroe} key={index}
                            />
                        ))
                    }
                </div>

            </Container>
        );
    }
}
