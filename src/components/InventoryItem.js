import React, { Component } from "react";
import pokecoin from "../img/pokecoin.png";

const QUERYIMAGE = "https://pokeres.bastionbot.org/images/pokemon/";

class InventoryItem extends Component {
	state = {
		price: this.props.item.price,
	};

	render() {
		const id = this.props.id + 1;
		return (
			<div className="inventoryItemModal has-tooltip" /* style={
				this.state.price <= this.props.coins
					? {opacity: "1" }
					: { opacity: "0.5" }} Dette fungerer, men bugger tooltippen slik at på de som man ikke har råd til vil tooltippen legge seg bak de andre*/>
				
				<img
					src={QUERYIMAGE + id + ".png"}
					alt="new"
					className="pokemonImage"
				/>
				<div className="pokemonInfo">
					#{id} {this.props.item.name} <br/>
					 Coins/s each: {this.props.item.coinsPerSecond}
					<div
						style={
							this.state.price <= this.props.coins
								? { color: "green" }
                                : { color: "red"}
						}
					>
						<img
							className="pokecoin"
							type="img"
							alt="pokecoin"
							src={pokecoin}
						/>
						{Math.ceil(this.state.price*(Math.pow(1.15, this.props.item.count)))}
					</div>
					
				</div>
				<div className="countInfo">{this.props.item.count}</div>

				
			</div>
		);
	}
}

export default InventoryItem;