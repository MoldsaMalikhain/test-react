import './css/App.css';
import React from 'react'
import Panel from './js/components/Panel';
import Cart from './js/components/Cart'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cartItems:[]
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this)
  }
  removeItem(product){
    const inCart = this.state.cartItems.slice();
    this.setState({
      cartItems: inCart.filter(x=>x.id !== product.id)
    })
    inCart.filter(x=>x.id !== product.id)

  }

  addToCart(product){
    const inCart = this.state.cartItems.slice();
    let alreadyInCart = false;
    inCart.forEach(item =>{
      if(item.id === product.id){
        item.count++;
        alreadyInCart = true;
        console.log('Already in cart')
      }
    });
    if(!alreadyInCart){
      console.log("Adding to cart")
      inCart.push({...product, count: 1})
    }
    this.setState({cartItems:inCart});
  }

  render(){
    return (
      <div className="App">
        <header><p>Shopping Cart</p></header>
        <main>
          <div className = 'content'>
            <div className='main-content'>
              <Panel addToCart={this.addToCart}/>
            </div>
            <div className = 'sidebar'>
              <Cart cartItems={this.state.cartItems} removeItem={this.removeItem}/>
            </div>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
