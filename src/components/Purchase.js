import React, {Component} from 'react'

class Purchase extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" onClick={this.props.handlePurchase}>purchase</button>
         );
    }
}
 
export default Purchase;