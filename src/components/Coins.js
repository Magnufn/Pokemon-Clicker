import React, { Component } from 'react';

class Coins extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }


    
    render() { 
        return ( Math.floor(this.props.coins));
    }
}
 
export default Coins;