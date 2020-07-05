import React, { Component } from "react";
import Ball from "./ball";
import Purchase from "./purchase";
import Inventory from "./Inventory";
import { pokemonArray } from "./hashMapPokemon";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			points: 0,
			myPokemons: pokemonArray, 
		};
	}

	handlePurchase = () => {
		console.log(this.state.myPokemons);
		if (this.state.points >= 2) {
			var ran = Math.floor(Math.random() * 9); //returns int between 0-9 + 1
			this.setState({ points: this.state.points - 0 });

			this.setState((prevState, currentProps) => ({
				myPokemons: prevState.myPokemons.map((currPokemon, index) => {
					if (index != ran) {
						return currPokemon;
					} else {
						return { ...currPokemon, count: currPokemon.count + 1 };
					}
				}),
			}));
		}
	};

	handleClick = () => {
		this.setState({ points: this.state.points + 1 });
	};

  handleInventoryClick = () => {

  }

	render() {
		return (
			<div>
				<h1>{this.state.points}</h1>

				<Purchase handlePurchase={this.handlePurchase} />
				<Ball handleClick={this.handleClick} />
        <button handleInventoryClick={this.handleInventoryClick}>inventory</button>
				<ul>
					{this.state.myPokemons.map((currPokemon, index) => (
						<li> #{index+1} {currPokemon.name} Count: {currPokemon.count}</li>
					))}
				</ul>
				<p>{JSON.stringify(this.state.myPokemons.name)}</p>
			</div>
		);
	}
}

export default Game;
