import React from "react";
import '../../css/App.css';
import {fruits} from '../List';
const Panel = (props) =>{ 
    return(
        <>
            {fruits.map((data, key) =>{
                return(
                    <button className = "container">
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
export default Panel;