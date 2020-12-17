import React from "react";
import './App.css';
import {fruits} from './List';

class PanelApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {items: fruits, cart: []}
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(e){
        const newItem ={
            
        }
    }
    render(){
        return(
        <div>
            <Panel items = {this.state.items} onSubmit={this.addToCart}></Panel>


        </div>
        );
    }
}

class Panel extends React.Component{
    
    render(){
        return(
            <>
                {fruits.map((data, key) =>{
                    return(
                        <button className = "container" onClick = {this.addToCart}>
                            <div key = {key}>
                                <div className = "image-place"> IMG </div>
                                <h3 className = "data">{data.text}</h3>
                                <h1 className = "data">{data.price + "$"}</h1>
                            </div>
                        </button>
                    );
                })}
            </>
        );
    }
}






// function Panel(){
//     function addToCart(value){
//         console.log("you added to cart : " + value);
//     }
//     return(
//         <>
//             {fruits.map((data,key) =>{
//                 return(
//                     <button className = "container" onClick = {addToCart(data.text)}>
//                         <div key = {key}>
//                             <div className = "image-place"> IMG </div>
//                             <h3 className = "data">{data.text}</h3>
//                             <h1 className = "data">{data.price + "$"}</h1>
//                         </div>
//                     </button>
//                 );
//             })}
//         </>
//     );
// }
export const HomePageHeader = () =>{
    return(
        <header className = "header">
            <h2>Here will be Cart obj</h2>
        </header>
    );
}

export default Panel;