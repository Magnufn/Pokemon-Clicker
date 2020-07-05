import React, {Component} from 'react';
import Ball from './ball';
import Purchase from './purchase';
import {pokemonArray} from './hashMapPokemon'

class Game extends Component {
    
    constructor(props){
        super(props); 
        this.state = {
            points: 0,
            myPokemons: pokemonArray // [id, [obj]] f.eks: [1, ["Bulbasaur", 0]],
        }
    }

    /*checkIfPokemonExist = (obj, myPokemonsList) => {
      for(var i = 0; i < myPokemonsList.length; i++){
        console.log("list", myPokemonsList[i])
        console.log("obj: ", obj)
        if (myPokemonsList[i] === obj){
          return true;
        }
      }
      return false;
    }*/

    handlePurchase = () => {
      console.log(this.state.myPokemons)
        if(this.state.points >= 2){
          var ran = Math.floor(Math.random() * 9 + 1) //returns int between 0-9 + 1
          console.log(ran)
          var PokObj = pokemonArray[ran];
          console.log("PokObj", PokObj);
          this.setState({points: this.state.points - 0})

          var newMyPokemons = [...this.state.myPokemons];
          //newMyPokemons[ran-1][1] += 1;
          this.setState((prevState, currentProps) => ({
            newMyPokemons[ran-1]: {...prevState, newMyPokemons[ran-1][1]: (newMyPokemons[ran-1][1] + 1)}
          }))

          /*var newStateMyPokemons = [...this.state.myPokemons];
          var obj = {ran, PokObj}
          console.log("dasjfk", newStateMyPokemons)
          var newAmount = newStateMyPokemons[obj] + 1;
          newStateMyPokemons.push(obj, newAmount);
          this.setState({myPokemons: newStateMyPokemons}  )
          this.setState({myPokemons: this.state.myPokemons.set(ran, this.state.myPokemons.get(ran) + 1)})
          */
          console.log(pokemonArray[ran])
          console.log("mp", this.state.myPokemons)
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