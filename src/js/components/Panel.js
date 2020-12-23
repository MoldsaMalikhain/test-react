import React from "react";
import '../../css/App.css';
import {fruits} from '../List';

const Panel = (props) =>{ 
    return(
        <>
            <ul className = "containers">
                {fruits.map((data, key) =>{
                    return( 
                        <li key = {key+=1}>
                            <div className="container">
                                <a href={'#' + data.id}>
                                    <div className = "image-place"> IMG </div>
                                    <p className = 'data'>{data.text}</p>
                                </a>
                                <hr noshade></hr>
                                <div className='data-price'>
                                    <p className = 'data'>{data.price + '$'}</p>
                                    <button className='panel-button'><span>Add To Cart</span></button>
                                </div>
                            </div>
                        </li>      
                    );
                })}
            </ul>
        </>
    );
    
}
export default Panel;