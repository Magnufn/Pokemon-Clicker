import React, { Component } from "react";
import pokecoin from "../img/pokecoin.png";

const QUERYIMAGE = "https://pokeres.bastionbot.org/images/pokemon/";

class InventoryItem extends Component {
	state = {
		price: 2,
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
					#{id} {this.props.item.name} {this.props.item.count}
					<div
						style={
							this.state.price <= this.props.points
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
						{this.state.price}
					</div>
				</div>
			</div>
		);
	}
}

export default InventoryItem;
