import React, { Component } from "react";
import Ball from "./Ball";
import Purchase from "./Purchase";
import InventoryPage from "./InventoryPage";
import TrainerName from "./TrainerName";
import Coins from "./Coins";
import { pokemonArray } from "./HashMapPokemon";
import pokecoin from "../img/pokecoin.png";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coins: 0,
			myPokemons: pokemonArray,
			inventorySeen: false,
			coinsPerSecond: 1,
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => this.setState({ coins: this.state.coins + this.state.coinsPerSecond/10}), 100);
	}
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handlePurchase = () => {
		if (this.state.coins >= 10) {
			var ran = Math.floor(Math.random() * 9); //returns int between 0-9 + 1
			this.setState({ coins: this.state.coins - 10})//, coinsPerSecond: this.state.coinsPerSecond + this.state.myPokemons[ran][2] });

			this.setState((prevState, currentProps) => ({
				myPokemons: prevState.myPokemons.map((currPokemon, index) => {
					console.log(currPokemon.name)
					if (index !== ran) {
						return currPokemon;
					} else {
						return { ...currPokemon, count: currPokemon.count + 1 };
					}
				}),
			}));
			console.log("ran", ran)
			this.setState({coinsPerSecond: this.state.coinsPerSecond + this.state.myPokemons[ran].coinsPerSecond})
		}
	};

	toggleInventory = () => {
		this.setState({
			inventorySeen: !this.state.inventorySeen,
		});
	};

	handleClick(...args) {
		//console.log(args);
		this.setState({ coins: this.state.coins + 1 });
		//return <ClickNumber />;
	}

	render() {
		return (
			<div className="content">
				<div className="firstTab">
					<h1 style={{ textAlign: "center" }}>
						<TrainerName />
						<Coins coins={this.state.coins} coinsPerSecond={this.state.coinsPerSecond} /> 
						<img
							className="pokecoin"
							type="img"
							alt="pokecoin"
							src={pokecoin}
							style={{margin: "0 0 0 4px"}}
						/>
						<p style={{fontSize: "15px"}}>Coins per second: {this.state.coinsPerSecond.toFixed(1)}</p>
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
							coins={this.state.coins}
						/>
					) : null}
				</div>
				<p>{JSON.stringify(this.state.myPokemons.name)}</p>
			</div>
		);
	}
}

export default Game;
