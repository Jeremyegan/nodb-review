import React, {Component} from 'react';
import axios from 'axios';
import './Pokemon.css';

class PokemonDisplay extends Component {
    handleDeletePokemon = () => {
        axios.delete(`/api/pokemon/${this.props.pokemon.id}`)
        .then(res => {
            this.props.deletePokemon(res.data)
        })
    }

    render(){
        return (
        <div>
            <h4 className='pokemon-name'>{this.props.pokemon.name}</h4>
            <img src={this.props.pokemon.image} alt='cool pokemon' className='pokemon-pictures'/>
            <button onClick={this.handleDeletePokemon}>Delete</button>
        </div>
    )
    }
}

export default PokemonDisplay;