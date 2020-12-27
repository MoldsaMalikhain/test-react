import React from "react";
import '../../css/App.css';
import fruits from '../List';

class Panel extends React.Component{
    
    render(){
        return(
            <>
                <ul className = "containers">
                    {fruits.map((data, key) =>{
                        return( 
                            <li key = {key+=1}>
                                <div className="container">
                                    <a href={'#' + data.id}>
                                        <div className = "image-place"> IMG </div>
                                        <p className = 'data'>{data.name}</p>
                                    </a>
                                    <hr></hr>
                                    <div className='data-price'>
                                        <p className = 'data'>{data.price + '$'}</p>
                                        <button onClick={()=> this.props.addToCart(data)} className='panel-button'><span>Add To Cart</span></button>
                                    </div>
                                </div>
                            </li>      
                        );
                    })}
                </ul>
            </>
        );
    }
}
export default Panel;