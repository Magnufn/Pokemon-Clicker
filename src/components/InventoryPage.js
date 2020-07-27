import React, { Component } from "react";
import InventoryItem from "./InventoryItem";

const QUERY = "http://pokeapi.co/api/v1/pokemon/";

export default class InventoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		};
	}

	fetchPokemonData = (pokemon) => {
		let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
		fetch(url)
			.then((response) => response.json())
			.then(function (pokeData) {
				console.log(pokeData);
			});
	};

	fetchKantoPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
			.then((response) => response.json())
			.then((allpokemon) => {
				allpokemon.results.forEach((pokemon) => {
					this.fetchPokemonData(pokemon);
				});
			});
	};

	listData = () => { //name, count, cps, price
	}

	handleClick = () => {
		this.props.toggle();
	};
	render() {
		return (
			<ul className="pokemonList">
				{this.props.data.map((item, i) => (
					<div
						onClick={() =>
							this.props.handlePurchase(
								Math.ceil(item.price * Math.pow(1.15, item.count)),
								i
							)
						}
						key={i}
					>
						<InventoryItem
							pokemonData={QUERY + i}
							item={item}
							id={i}
							coins={this.props.coins}
						/>
					</div>
				))}
			</ul>
			/*<div className="modal" style={inventoryStyle}>
				<div className="modal_content" style={inventoryContentStyle}>
					<span className="close" style={closeStyle} onClick={this.handleClick}>
						&times;{""}
					</span>
					<ul>
						{this.props.data.map((currPokemon, index) => (
							<li key={currPokemon.name}>
								{" "}
								#{index + 1} {currPokemon.name} Count: {currPokemon.count}
							</li>
						))}
					</ul>
				</div>
			</div>*/
		);
	}
}
