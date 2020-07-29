import React, { Component } from "react";
import Ball from "./Ball";
import InventoryPage from "./InventoryPage";
import TrainerName from "./TrainerName";
import Coins from "./Coins";
import UpgradeBall from "./UpgradeBall";
import ResetGame from "./ResetGame";
import { pokemonArray } from "./HashMapPokemon";
import pokecoin from "../img/pokecoin.png";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coins: parseInt(localStorage.getItem("coins")) || 0,
			myPokemons:
				JSON.parse(localStorage.getItem("myPokemons")) || pokemonArray,
			inventorySeen: true,
			coinsPerSecond: parseFloat(localStorage.getItem("coinsPerSecond")) || 0,
			ballLvl: parseInt(localStorage.getItem("ballLvl")) || 1,
			coinsPerClick: parseInt(localStorage.getItem("coinsPerClick")) || 1,
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => this.intervalFunction(), 1000);
		this.intervalLocalStorage = setInterval(
			() => this.localStorageFunction(),
			30000
		);
	}

	intervalFunction = () => {
		this.setState({ coins: this.state.coins + this.state.coinsPerSecond });
	};

	localStorageFunction = () => {
		localStorage.setItem("coins", this.state.coins);
		localStorage.setItem("myPokemons", JSON.stringify(this.state.myPokemons));
		localStorage.setItem("coinsPerSecond", this.state.coinsPerSecond);
		localStorage.setItem("ballLvl", this.state.ballLvl);
		localStorage.setItem("coinsPerClick", this.state.coinsPerClick);
	};

	componentWillUnmount() {
		clearInterval(this.interval);
		clearInterval(this.intervalLocalStorage);
	}

	handlePurchase = (price, i) => {
		if (this.state.coins >= price) {
			//var ran = Math.floor(Math.random() * 9); //returns int between 0-9 + 1
			this.setState({ coins: this.state.coins - price }); //, coinsPerSecond: this.state.coinsPerSecond + this.state.myPokemons[ran][2] });

			this.setState((prevState, currentProps) => ({
				myPokemons: prevState.myPokemons.map((currPokemon, index) => {
					if (index !== i) {
						return currPokemon;
					} else {
						return { ...currPokemon, count: currPokemon.count + 1 };
					}
				}),
			}));

			this.setState({
				coinsPerSecond:
					this.state.coinsPerSecond + this.state.myPokemons[i].coinsPerSecond,
			});
		}
	};

	handleClick(...args) {
		//console.log(args);
		this.setState({ coins: this.state.coins + this.state.coinsPerClick });
		//return <ClickNumber />;
	}

	handleReset = () => {
		localStorage.clear();
		this.setState({
			coins: 0,
			myPokemons: pokemonArray,
			inventorySeen: true,
			coinsPerSecond: 0,
			ballLvl: 1,
			coinsPerClick: 1,
		});
	};

	handleUpgradeBall = () => {
		this.setState({
			ballLvl: this.state.ballLvl + 1,
			coinsPerClick: this.state.coinsPerClick + 1,
			coins: this.state.coins - 20,
		});
	};

	render() {
		return (
			<div className="content">
				<div className="firstTab">
					<h1 style={{ textAlign: "center" }}>
						<TrainerName />
						<Coins
							coins={this.state.coins}
							coinsPerSecond={this.state.coinsPerSecond}
						/>
						<img
							className="pokecoin"
							type="img"
							alt="pokecoin"
							src={pokecoin}
							style={{ margin: "0 0 0 4px" }}
						/>
						<p style={{ fontSize: "15px" }}>
							Coins per second: {this.state.coinsPerSecond.toFixed(1)}
						</p>
					</h1>
					{/* 4 different approaches to binding this. First could lead to performance issues.*/}
					{/*<Ball handleClick={this.handleClick.bind(this)} />*/}
					{/* Second is similar, easiest way to pass parameters. If code doesn't involve rendering nested children components, this approach is viable. */}
					<Ball
						handleClick={() => this.handleClick()}
						ballLvl={this.state.ballLvl}
					/>
					{/* React docs suggest binding in the constructor. */}
					{/* The new, experimental way, which create-react-app supports, is to make arrow functions when creating the methods. Will probably be the go-to approach when it's accepted as a feature in React */}
				</div>

				<div className="secondTab">
					{" "}
					HER KOMMER DET MER KULT SENERE
					<ResetGame onClick={this.handleReset} />
				</div>
				<div className="thirdTab">
					{/*<div className="inventoryBtn" onClick={this.toggleInventory}>
						<button>Toggle inventory</button>
					</div>
					{this.state.inventorySeen ? (*/}
					<div className="upgradeDiv">
						HER SKAL DET VÆRE UPGRADES ELLER NOE(?) <br />
						<UpgradeBall
							ballLvl={this.state.ballLvl}
							coins={this.state.coins}
							handleClick={() => this.handleUpgradeBall()}
						/>
					</div>
					<div className="inventoryPageDiv">
						<InventoryPage
							toggle={this.toggleInventory}
							data={this.state.myPokemons}
							coins={this.state.coins}
							handlePurchase={this.handlePurchase}
						/>
					</div>
					{/*) : null}*/}
				</div>
			</div>
		);
	}
}

export default Game;
