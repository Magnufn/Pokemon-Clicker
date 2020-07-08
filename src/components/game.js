import React, { Component } from "react";
import Ball from "./Ball";
import Purchase from "./Purchase";
import Inventory from "./Inventory";
import { pokemonArray } from "./HashMapPokemon";
import ClickNumber from "./ClickNumber";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			points: 0,
			myPokemons: pokemonArray,
			inventorySeen: false,
		};
	}

	handlePurchase = () => {
		console.log(this.state.myPokemons);
		if (this.state.points >= 2) {
			var ran = Math.floor(Math.random() * 9); //returns int between 0-9 + 1
			this.setState({ points: this.state.points - 0 });

			this.setState((prevState, currentProps) => ({
				myPokemons: prevState.myPokemons.map((currPokemon, index) => {
					if (index !== ran) {
						return currPokemon;
					} else {
						return { ...currPokemon, count: currPokemon.count + 1 };
					}
				}),
			}));
		}
	};

	toggleInventory = () => {
		this.setState({
			inventorySeen: !this.state.inventorySeen,
		});
	};

	handleClick() {
        this.setState({ points: this.state.points + 1 });
        this.getPosition();
		//return <ClickNumber />;
	}

	getPosition(e) {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        console.log("e:", e)
        console.log("x: ", x, " y: ", y)
		return {
			x,
			y,
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.points}</h1>

				<Purchase handlePurchase={this.handlePurchase} />
				<div>
					<Ball handleClick={this.handleClick.bind(this)} />
					<ClickNumber />
				</div>
				<div>
					<div className="btn" onClick={this.toggleInventory}>
						<button>Toggle inventory</button>
					</div>
					{this.state.inventorySeen ? (
						<Inventory
							toggle={this.toggleInventory}
							data={this.state.myPokemons}
						/>
					) : null}
				</div>
				<p>{JSON.stringify(this.state.myPokemons.name)}</p>
			</div>
		);
	}
}

export default Game;
