import React from "react";
import '../style/Home.css';


const Home = () => {
    return (
        <div class="slider">
            <ul>
                <li>
                    <h2>BIENVENIDOS A PIZZERIA ACAMICA</h2>
                    <img src="https://blog.monouso.es/wp-content/uploads/Cantidad-de-calori%CC%81as-por-pizza-1024x536.jpeg" alt="" />
                </li>
                <li>
                    <h2>UNA PIZZERIA AL ESTILO DE REACT</h2>
                    <img src="https://image.freepik.com/foto-gratis/vista-superior-pizza-pepperoni-cortada-seis-rebanadas_141793-2157.jpg" alt="" />
                </li>
                <li>
                    <h2>AQUI COMERAN LAS MEJORES PIZZAS</h2>
                    <img src="https://cdn.ticbeat.com/src/uploads/2016/09/pizza.jpg" alt="" />
                </li>
                <li>
                    <h2>CON SABOR A HOOKS</h2>
                    <img src="https://blog.monouso.es/wp-content/uploads/Un-poco-de-historia-1024x536.jpeg" alt="" />
                </li>
            </ul>
        </div>
    );
};

export default Home;