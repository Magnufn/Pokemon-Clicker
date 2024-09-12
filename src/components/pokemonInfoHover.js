import React, { Component } from "react";
import pokecoin from "../img/pokecoin.png";

const QUERYIMAGE = "https://pokeres.bastionbot.org/images/pokemon/";

class pokemonInfoHover extends Component {
	state = {
		price: this.props.item.price,
	};
	render() {
		const id = this.props.id + 1;

		const tooltipImageStyle = {};

		return (
			<div
				className="inventoryItemModal" /* style={
				this.state.price <= this.props.coins
					? {opacity: "1" }
					: { opacity: "0.5" }} Dette fungerer, men bugger tooltippen slik at på de som man ikke har råd til vil tooltippen legge seg bak de andre*/
			>
				<img
					src={QUERYIMAGE + id + ".png"}
					alt="new"
					className="pokemonImage"
				/>

				<div className="pokemonInfo pokemonInfoHover">
					<p style={{ fontSize: "2vw", margin: "0" }}>
						#{id} {this.props.item.name}
					</p>
					<p style={{ fontSize: "0.5vw", margin: "0" }}>
						[{this.props.item.count} owned]
					</p>
					Description...
					<li>
						each {this.props.item.name.toLowerCase()} earns{" "}
						{this.props.item.coinsPerSecond} pokécoins per second
					</li>
					<li>
						{this.props.item.count} {this.props.item.name.toLowerCase()}s earns{" "}
						{this.props.item.coinsPerSecond * this.props.item.count} pokécoins
						per second
					</li>
					<li>{this.props.totalEarned.toFixed(1)} pokécoins earned so far</li>
				</div>
				<div
					className="pokecoinHoverDiv"
					style={
						this.state.price <= this.props.coins
							? { color: "green" }
							: { color: "red" }
					}
				>
					<img
						className="pokecoinHover"
						type="img"
						alt="pokecoin"
						src={pokecoin}
						style={tooltipImageStyle}
					/>
					{Math.ceil(this.state.price * Math.pow(1.15, this.props.item.count))}
				</div>
			</div>
		);
	}
}

export default pokemonInfoHover;
