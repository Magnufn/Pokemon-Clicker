import React, { Component } from "react";
import InventoryItem from "./inventoryitem";

export default class InventoryPage extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			items: []
		}
	}
	
	handleClick = () => {
		this.props.toggle();
	};
	render() {
		return (
			<div>
				<ul className="inventoryPage" style={this.styles}>
					{this.props.data.map((item, i) => (
						<InventoryItem item={item} id={i} points={this.props.points} key={i} />
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

export default InventoryPage;
