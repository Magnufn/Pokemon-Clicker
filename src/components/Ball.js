import React, { Component } from "react";
import ball1 from "../img/pokeball.png";
import ball2 from "../img/greatBall.png";
import ball3 from "../img/ultraBall.png";
//More balls can be downloaded here: https://steamcommunity.com/sharedfiles/filedetails/?id=1455911766
import "../App.css";
import ClickNumber from "./ClickNumber";

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

	getBallLvl = (ballLvl) => {
		switch(ballLvl){
			case 1:
				return ball1;
			case 2: 
				return ball2;
			case 3: 
				return ball3;
			default: return ball2;
		}
	}

	render() {
		return (
			<div>
				<img
					className="pokeball"
					type="img"
					alt="ball"
					src={this.getBallLvl(this.props.ballLvl)}
					onClick={this.props.handleClick}
				/>
			</div>
			 /*<ClickNumber mousePosition={this.getMousePosition.bind(this)} />*/
		);
	}
}

export default Ball;
