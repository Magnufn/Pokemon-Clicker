import React, { Component } from 'react';

class ResetGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() { 
        return ( 
            <button onClick={this.props.onClick}>
                Reset Game
            </button>
         );
    }
}
 
export default ResetGame;