import React, {Component} from 'react';
import axios from 'axios';
import PokemonTrainer from './../../Pictures/PokemonTrainer.png'
import PokemonDisplay from './PokemonDisplay';
import './Pokemon.css'

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: [],
            pokeName: '',
            pokeImage: ''
        }
    }

    componentDidMount(){
        this.handleGetPokemon()
    }

    handleName(val){
        this.setState({
            pokeName: val
        })
    }

    handleImage(val){
        this.setState({
            pokeImage: val
        })
    }

    handleGetPokemon = () => {
        axios.get('/api/pokemon')
        .then(res => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    handleAddPokemon = () => {
         axios.post('/api/pokemon',  {name: this.state.pokeName, image: this.state.pokeImage})
        .then(res => {
            this.setState({
                pokemon: res.data
            })
        })
        this.setState({pokeName: ''})
        this.setState({pokeImage: ''})
    }

    handleUpdatePokemon = (data) => {
        this.setState({
            pokemon: data
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
                                updatePokemon={this.handleUpdatePokemon}
                                deletePokemon={this.handleDeletePokemon}/>
            )
        })
        return(
            <div className='pokemon-flex-div'>
                <div className='pokemon-trainer-div'>
                    <img src={PokemonTrainer} alt='Pokemon Trainer' className='pokemon-trainer-image' />
                </div>
                <div>
                    <input 
                        onChange={(e) => this.handleName(e.target.value)}
                        value={this.state.pokeName}
                        placeholder='Enter Pokename' />
                    <input 
                        onChange={(e) => this.handleImage(e.target.value)}
                        value={this.state.pokeImage}
                        placeholder='Enter Image URL' />
                    <button onClick={this.handleAddPokemon}>Add Pokemon</button>
                </div>
                <div className='pokemon'>
                    {mappedPokemon}
                </div>
            </div>
        ) 
    }
}

export default Pokemon;