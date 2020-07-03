import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Ball from './ball';
import Purchase from './purchase';
import {pokemonMap} from './hashMapPokemon'

class Game extends Component {
    constructor(props){
        super(props); 
        this.state = {
            points: 0,
            myPokemons: new Map() 
        }
    }

    handlePurchase = () => {
        if(this.state.points >= 2){
          var ran = Math.floor(Math.random() * 9 + 1) //returns int between 0-9 + 1
          console.log(ran)
          var a = pokemonMap.get(ran);
          this.setState({points: this.state.points - 0, this.myPokemons.set(ran, a)})
          //this.setState({myPokemons: [0, 1]})//this.myPokemons.set(ran, a)}) //fungerer ikke
          console.log(pokemonMap.get(ran))
          console.log("mp", this.state.myPokemons)
        } 
        else {
    
        }
    }

    handleClick = () => {
      this.setState({points: this.state.points+1});
    }
    
    render() { 
        return (
          <div>
            <h1>{this.state.points}</h1>
            <Purchase handlePurchase={this.handlePurchase}/>
            <Ball handleClick={this.handleClick}/>
          </div>
        );
    }
}
 
export default Game;