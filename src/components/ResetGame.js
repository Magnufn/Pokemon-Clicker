import React, { Component } from 'react';
import ConfirmResetGameModal from "./ConfirmResetGameModal";


class ResetGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showConfirmationModal: false,
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