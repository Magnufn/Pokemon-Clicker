import React, { Component } from "react";
import "../app.css";

class ClickNumber extends Component {
	constructor(props) {
		super(props);

		this.state = {
			//numberId: this.props.numberId
		};
	}
	render() {
		return <p className="clickNumber">+1</p>;
	}
}

export default ClickNumber;
