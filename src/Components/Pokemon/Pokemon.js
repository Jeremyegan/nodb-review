import React, {Component} from 'react';
import axios from 'axios';
import PokemonTrainer from './../../Pictures/PokemonTrainer.png'
import PokemonDisplay from './PokemonDisplay';
import './Pokemon.css'

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount(){
        this.handleGetPokemon()
    }

    handleGetPokemon = () => {
        axios.get('/api/pokemon')
        .then(res => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    handleDeletePokemon = (data) => {
        this.setState({
            pokemon: data
        })
    }

    render(){
        const mappedPokemon = this.state.pokemon.map((element, i) => {
            return (
                <PokemonDisplay key={i} 
                                pokemon={element}
                                deletePokemon={this.handleDeletePokemon}/>
            )
        })
        return(
            <div className='pokemon-flex-div'>
                <div className='pokemon-trainer-div'>
                    <img src={PokemonTrainer} alt='Pokemon Trainer' className='pokemon-trainer-image' />
                </div>
                <div className='pokemon'>
                    {mappedPokemon}
                </div>
            </div>
        ) 
    }
}

export default Pokemon;