import React, { Component } from "react";
import ball from "../img/pokeball.png";


class Ball extends Component {

  render() {
    return (
        <div>
          <img type="img" alt="ball" src={ball}  onClick={this.props.handleClick}/>
        </div>
    );
  }
}

export default Ball;
