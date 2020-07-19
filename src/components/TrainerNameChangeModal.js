import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class TrainerNameChangeModal extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		if (!this.props.showNameChange) {
			return null;
		}
		return (
			<Modal
				isOpen={this.props.showNameChange}
				shouldCloseOnOverlayClick={false}
				onRequestClose={() => this.props.toggleShowNameChange()}
			>
				<div>
					<h1> Give yourself a name </h1>
					<p> What should your name be? </p>
					<input
						type="text"
						name="username"
						value={this.props.trainerName}
						onChange={this.props.handleInput}
						onKeyPress={(event) => {
							if (event.key === "Enter") {
								this.props.toggleShowNameChange();
							}
						}}
					/>
					<button onClick={() => this.props.toggleShowNameChange()}>
						Close
					</button>
				</div>
			</Modal>
		);
	}
}

export default TrainerNameChangeModal;
