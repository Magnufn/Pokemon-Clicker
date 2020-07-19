import React, {Component} from 'react'

class Purchase extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" onClick={this.props.handlePurchase}>purchase (10 coins)</button>
         );
    }
}
 
export default Purchase;