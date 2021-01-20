import { wrap } from 'module';
import React from 'react'
import '../../css/App.css';


class Cart extends React.Component{
    // priceDiscount(items){
    //     if(items.count % 3){}
    //     else{
    //     }
    //     console.log(this.state.price)

    // return <div>{items.reduce((a,c) => a + (c.price * c.count), 0)}$</div>;}


    render(){
    const {cartItems} = this.props
    
    return(
        <>
            <div>
                {cartItems.length === 0? 
                    <div className = 'cart cart-header'>Cart is empty</div>
                :
                    <div className = 'cart cart-header'>You have: {cartItems.length} items in the cart</div>
                }
            </div>
            <div>
                <div className = 'cart'>
                    <ul className = 'cart-items'>
                        {cartItems.map(items =>{
                            
                            return(
                                <li key={items.id + 1}>
                                    <div>
                                        <a href={'#' + items.id}>
                                            <div className = "cart-image-place" style={{marginLeft:'0.5em'}}> IMG </div>
                                        </a>
                                        <div>
                                            <p className = 'data'>{items.name} x{items.count}</p>
                                            <p className = 'data' style={{marginTop:'0.2rem', color:'rgb(129, 129, 129)'}}>{items.price}$</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='remove-button' onClick={()=>this.props.removeItem(items)}>Remove</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    {cartItems.length === 0 ?
                        <div></div>
                        :
                        <div className='cart'>
                            <div className='total'>
                                Total: 
                                <div>
                                      {/* {cartItems.reduce((a,c) => a + (c.price * c.count), 0)}$  */}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>

        
    );
    }
}

export default Cart;
