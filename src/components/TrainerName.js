import React, { Component } from "react";
import TrainerNameChangeModal from "./TrainerNameChangeModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

class TrainerName extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trainerName: "Set trainer name",
			showNameChange: false,
		};
	}

	toggleShowNameChange = () => {
		this.setState({
			showNameChange: !this.state.showNameChange,
		});
	};

	handleInput = event => {
		this.setState({ trainerName: event.target.value });
	  };

	render() {
		return (
			<div>
				<p onClick={() => this.toggleShowNameChange()}>
					{this.state.trainerName}
				</p>
				<TrainerNameChangeModal handleInput={this.handleInput} trainerName={this.state.trainerName} showNameChange={this.state.showNameChange} toggleShowNameChange={this.toggleShowNameChange} />
			</div>
		);
	}
}

export default TrainerName;
