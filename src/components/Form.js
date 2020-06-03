import React, { useState } from "react";
import '../style/Form.css';
import { Link } from "react-router-dom";

const Form = () => {
    const [pizza, setPizza] = useState({
        people: 0,
        food: 0,
        cantidad: 0,
    });

    const handleChange = e => {
        pizza[e.target.name] = e.target.value;
        setPizza({ ...pizza })
    }

    function handleQuantity() {
        setPizza({
            ...pizza,
            cantidad: (pizza.people * pizza.food / 8)
        });
    }
    return (
        <div className="form-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleQuantity();
                }}
            >
                <div>
                    <label >
                        Número de personas que comerán pizza <br />
                        <input
                            type='number'
                            name='people'
                            onChange={handleChange}
                            value={pizza.people}
                        />
                    </label>
                </div>
                <div >
                    <label>
                        Cantidad de rebanadas que cada persona comerá <br />
                        <input
                            type='number'
                            name='food'
                            onChange={handleChange}
                            value={pizza.food}
                        />
                    </label>
                </div>
                <div>
                    <button
                        type='submit'
                        onClick={handleQuantity}
                    >
                        Calcular pizzas
                    </button>
                </div>
            </form>
            <label >
                La cantidad de pizzas que necesita comprar son: {pizza.cantidad}
            </label>
            <div>
                <Link to={`/Pizza/`}>
                    <button >volver</button>
                </Link>
            </div>
        </div>
    );
};

export default Form;