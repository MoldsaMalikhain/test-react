import './css/App.css';
import React from 'react'
import Panel from './js/components/Panel';
import Cart from './js/components/Cart'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      cartItems: []
    }
  }

  addToCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    console.log(product);
    let alreadyInCart = false;
    // cartItems.foreEach(item =>{
    //   if(item.id === product.id)
    //   item.count++;
    //   alreadyInCart = true;
    // });
    // if(!alreadyInCart){
    //   cartItems.push({...product, count: 1})
    // }
    // this.setState({cartItems});
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
              <Cart cartItems={this.state.cartItems}/>
            </div>
          </div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
