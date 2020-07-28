import React, { Component } from "react";
import pokecoin from "../img/pokecoin.png";
import PokemonInfo from "./pokemonInfo";
import PokemonInfoHover from "./pokemonInfoHover";

class InventoryItem extends Component {
	constructor(props) {
		super(props);
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state = {
			isHovering: false,
			totalEarned: parseInt(localStorage.getItem('totalEarned' + this.props.id)) || 0
		};
	}


	componentDidMount() {
		this.interval = setInterval(() => this.setState({ totalEarned: this.state.totalEarned + this.props.item.coinsPerSecond*this.props.item.count}), 1000);
		this.intervalLocalStorage = setInterval(() => this.localStorageFunction(), 30000);

	}

	localStorageFunction = () => {
		localStorage.setItem('totalEarned' + this.props.id, this.state.totalEarned)
	};
	
	componentWillUnmount() {
		clearInterval(this.interval);
		clearInterval(this.intervalLocalStorage);
	}

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}

	render() {
		return (
			<div
				onMouseEnter={this.handleMouseHover}
				onMouseLeave={this.handleMouseHover}
			>
				{!this.state.isHovering && (
				<PokemonInfo
					item={this.props.item}
					id={this.props.id}
					coins={this.props.coins}
				/>)}
				{this.state.isHovering && (
					<PokemonInfoHover
						item={this.props.item}
						id={this.props.id}
						coins={this.props.coins}
						totalEarned={this.state.totalEarned}
					/>
				)}
			</div>
		);
	}
}
/*<span className="tooltip-wrapper"><span className="tooltip">{this.props.item.name}</span></span>*/

export default InventoryItem;
