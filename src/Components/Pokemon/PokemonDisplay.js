import React, {Component} from 'react';
import axios from 'axios';
import './Pokemon.css';

class PokemonDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            editName: ''
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleInput(val){
        this.setState({editName: val})
    }

    handleUpdatePokemon(id){
        let updatedPokemon = {
            name: this.state.editName
        }
        axios.put(`/api/pokemon/${id}`, updatedPokemon)
        .then(res => {
            this.props.updatePokemon(res.data)
            this.handleToggle();
        })
    }

    handleDeletePokemon = () => {
        axios.delete(`/api/pokemon/${this.props.pokemon.id}`)
        .then(res => {
            this.props.deletePokemon(res.data)
        })
    }

    render(){
        return (
        <div>
            {!this.state.edit
            ?(<div className='poke-boxes'>
                <h4 className='pokemon-name'>{this.props.pokemon.name}</h4>
                <img src={this.props.pokemon.image} alt='cool pokemon' className='pokemon-pictures'/>
                <button onClick={this.handleToggle}>Edit</button>
                <button onClick={this.handleDeletePokemon}>Delete</button>
            </div>) : (
            <div className='poke-boxes'>
                <input
                    onChange = {(e) => this.handleInput(e.target.value)}
                    value = {this.state.editName}
                    placeholder = 'Edit Name Here'/>
                <img src={this.props.pokemon.image} alt='cool pokemon' className='pokemon-pictures'/>
                <button onClick={() => this.handleUpdatePokemon(this.props.pokemon.id)}>Submit</button>
                <button onClick={this.handleDeletePokemon}>Delete</button>
            </div>
            )}
        </div>
    )
    }
}

export default PokemonDisplay;