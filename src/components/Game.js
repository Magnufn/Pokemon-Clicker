import React, { Component } from "react";
import Ball from "./Ball";
import Purchase from "./Purchase";
import InventoryPage from "./InventoryPage";
import TrainerName from "./TrainerName";
import { pokemonArray } from "./HashMapPokemon";
import pokecoin from "../img/pokecoin.png";

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
			var ran = Math.floor(Math.random() * 10); //returns int between 0-9 + 1
			this.setState({ points: this.state.points - 2 });

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

	handleClick(...args) {
		console.log(args);
		this.setState({ points: this.state.points + 1 });
		//return <ClickNumber />;
	}

	render() {
		return (
			<div className="content">
				<div className="firstTab">
					<h1 style={{ textAlign: "center" }}>
						<TrainerName />
						{this.state.points} 
						<img
							className="pokecoin"
							type="img"
							alt="pokecoin"
							src={pokecoin}
							style={{margin: "0 0 0 4px"}}
						/>
					</h1>
					{/* 4 different approaches to binding this. First could lead to performance issues.*/}
					{/*<Ball handleClick={this.handleClick.bind(this)} />*/}
					{/* Second is similar, easiest way to pass parameters. If code doesn't involve rendering nested children components, this approach is viable. */}
					<Ball handleClick={() => this.handleClick()} />
					{/* React docs suggest binding in the constructor. */}
					{/* The new, experimental way, which create-react-app supports, is to make arrow functions when creating the methods. Will probably be the go-to approach when it's accepted as a feature in React */}
				</div>

				<div className="secondTab"> HER KOMMER DET MER KULT SENERE</div>
				<div className="thirdTab">
					<div className="inventoryBtn" onClick={this.toggleInventory}>
						<button>Toggle inventory</button>
					</div>
					<Purchase handlePurchase={this.handlePurchase} />
					{this.state.inventorySeen ? (
						<InventoryPage
							toggle={this.toggleInventory}
							data={this.state.myPokemons}
							points={this.state.points}
						/>
					) : null}
				</div>
				<p>{JSON.stringify(this.state.myPokemons.name)}</p>
			</div>
		);
	}
}

export default Game;
