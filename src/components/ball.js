import React, { Component } from "react";
import ball from "../img/pokeball.png";
import "../app.css";
import ClickNumber from "./clicknumber";

class Ball extends Component {
	getMousePosition(e) {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left;
		var y = e.clientY - rect.top;
		console.log("e:", e);
		console.log("x: ", x, " y: ", y);
		return {
			x,
			y,
		};
	}

	render() {
		return (
			<div>
				<img
					className="pokeball"
					type="img"
					alt="ball"
					src={ball}
					onClick={this.props.handleClick}
				/>
				<ClickNumber mousePosition={this.getMousePosition.bind(this)} />
			</div>
		);
	}
}

export default Ball;
