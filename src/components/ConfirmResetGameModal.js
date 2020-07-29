import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class ConfirmResetGameModal extends Component {
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
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => this.props.toggleShowNameChange()}
				className="nameChangeModal"
				overlayClassName="nameChangeModalOverlay"
			>
				<div style={{textAlign: "center"}}>
					<h1> Give yourself a name </h1>
					<p> What should your name be? </p>
					<input
						type="text"
						name="username"
						style={{position: "relative", width: "80%", border: "1px solid black"}}
						value={this.props.trainerName}
						onChange={this.props.handleInput}
						onKeyPress={(event) => {
							if (event.key === "Enter") {
								this.props.toggleShowNameChange();
							}
						}}
					/>
					<br/>
					<button style={{margin: "5px 10px 10px 0px"}} onClick={() => this.props.toggleShowNameChange()}>
						Close
					</button>
				</div>
			</Modal>
		);
	}
}

export default ConfirmResetGameModal;
