import React from 'react';
import '../style/Contact.css'
import Datapizza from '../data/Datapizza';
import Pizza from './Pizza';


const FullPizza = () => {
    return (
        <div className="boxMain">
            {Datapizza.map((pizza) =>
                <div>
                    <Pizza key={pizza.id}
                        pizza={pizza} />
                </div>
            )}
        </div>
    )
}

export default FullPizza;