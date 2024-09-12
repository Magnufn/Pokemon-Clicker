import React, { Component } from "react";
import InventoryItem from "./InventoryItem";

export default class InventoryPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
		};
	}

	handleClick = () => {
		this.props.toggle();
	};
	render() {
		return (
			<div>
				<ul className="inventoryPage">
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
							<InventoryItem item={item} id={i} coins={this.props.coins} />
						</div>
					))}
				</ul>
			</div>
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
