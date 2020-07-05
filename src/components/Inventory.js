import React, { Component } from "react";

export default class PopUp extends Component {
	handleClick = () => {
		this.props.toggle();
	};
	render() {
		const inventoryStyle = {
            position: "absolute",
            width: "25%",
            display: "inline-block",
			right: "20%",
			top: "20%",
			maxHeight: "calc(50vh - 21px)",
			overflowY: "auto",
			backgroundColor: "green",
		};

		const inventoryContentStyle = {
			color: "yellow"
		};
		const closeStyle = {
			color: "yellow",
            float: "right",
            transform: "scale(2)",
            cursor: "pointer",
		};
		return (
			<div className="modal" style={inventoryStyle}>
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
			</div>
		);
	}
}
