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
          this.setState({points: this.state.points - 0})
          if(!this.state.myPokemons.has(ran)){
            this.setState({myPokemons: this.state.myPokemons.set(ran, 1)}) 
          }
          else {
            this.setState({myPokemons: this.state.myPokemons.set(ran, this.state.myPokemons.get(ran) + 1)})
          }
          console.log(pokemonMap.get(ran))
         // if(this.state.myPokemons.get(1)){
            /*for(var i in this.state.myPokemons){
              console.log("id", this.state.myPokemons.get(i))
              console.log("name", pokemonMap.get(this.state.myPokemons.get(i)))
              console.log("amount", this.state.myPokemons.get(i))
            }*/ 
          //}
          
          
          console.log("mp", this.state.myPokemons)
        } 
        else {
    
        }
    }

    createRenderTable = () => {
      function logMapElements(value, key, map) {
        var mapObjString = "id: " + key + ", amount: " + value + ", name: " + pokemonMap.get(key);
        console.log(mapObjString);
        return mapObjString;

      }
      var mapAsc = new Map([...this.state.myPokemons.entries()].sort());
      mapAsc.forEach(logMapElements)
    }

    handleClick = () => {
      this.setState({points: this.state.points+1});
    }
    
    render() { 
        return (
          <div>
            <h1>{this.state.points}</h1>
            <h1>{this.createRenderTable}</h1>
            <Purchase handlePurchase={this.handlePurchase}/>
            <Ball handleClick={this.handleClick}/>
          </div>
        );
    }
}
 
export default Game;