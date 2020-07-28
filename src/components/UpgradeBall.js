import React, { Component } from "react";

class UpgradeBall extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	checkIfAvailable = () => {
		if (this.props.ballLvl === 1 && this.props.coins >= 20) {
			// Ball is lvl 1 (default)
			return true;
		} else if (this.props.ballLvl === 2 && this.props.coins >= 30) {
			// Ball is lvl 2
			return true;
		} //Only 2 ball upgrades for now
		else {
			return false;
		}
	};

	render() {
        const tooltip = "Click to upgrade your coins per click"
		return this.checkIfAvailable() ? (
			<div className="tooltip">
				<button style={{marginLeft:"5px"}} onClick={this.props.handleClick}>Upgrade ball</button>
                <span className="tooltiptext">Click to upgrade your coins per click to {this.props.ballLvl}</span>
			</div>
		) : null;
	}
}

export default UpgradeBall;
