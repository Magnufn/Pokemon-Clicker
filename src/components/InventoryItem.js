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
			<div className="inventoryItemModal">
				<img
					src={QUERYIMAGE + id + ".png"}
					alt="new"
					className="pokemonImage"
				/>
				<div className="pokemonInfo">
					#{id} {this.props.item.name} {this.props.item.count} <br/>
					 Coins/s each: {this.props.item.coinsPerSecond}
					<div
						style={
							this.state.price <= this.props.coins
								? { color: "green" }
                                : { color: "red" }
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
			</div>
		);
	}
}

export default InventoryItem;