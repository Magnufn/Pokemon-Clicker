import React, { Component } from "react";
import ball from "../img/circle_red.png";
import '../App.css';


class Ball extends Component {

	render() {		
		return (
			<div>
				<img
          className="pokeball"
					type="img"
					alt="ball"
					src={ball}
					onClick={this.props.handleClick, this.props.handleClick2}
				/>
			</div>
		);
	}
}

export default Ball;
