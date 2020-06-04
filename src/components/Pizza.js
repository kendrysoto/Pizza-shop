import React from 'react';
import '../style/Pizza.css';
import { Link } from "react-router-dom";


const Pizza = ({ pizza }) => {
    return (
        <div className="pizza-container">
            {console.log(pizza.image)}
            <h4 className="pizza-name">{pizza.name}</h4>
            <img className="pizza-img" src={pizza.image} />
            <Link className="pizza-btn" to="/Form">
                PEDIR PIZZA
            </Link>
        </div>
    )
}

export default Pizza;