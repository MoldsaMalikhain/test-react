import React from 'react'
import '../../css/App.css';


class Cart extends React.Component{
    render(){
    const {cartItems} = this.props
    return(
        <div>
            {cartItems.length === 0? 
                <div className = 'cart cart-header'>Cart is empty</div>
            :
                <div className = 'cart cart-header'>{cartItems.length} in the cart{""}</div>
            }
        </div>
    );
    }
}

export default Cart;
