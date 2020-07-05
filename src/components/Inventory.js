import React, {Component} from 'react'

class Inventory extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" onClick={this.props.handleInventory}>Inventory</button>
         );
    }
}
 
export default Inventory;