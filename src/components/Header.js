import React from 'react';
import '../style/Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div class="SideMenu-container">
                <h1 class="SideMenu-h1">PIZZERIA ACAMICA</h1>
            </div >
            <nav>
                <div id="menuA">
                    <div href="#" class="showhim"><span class="menumov"> &#8803;</span>
                        <div class="showme">
                            <li><Link to="/" >INICIO</Link></li>
                            <li><Link to="/Pizza">MENÚ</Link></li>
                            <li><Link to="/Contact"> NOSOTROS</Link></li>
                        </div>
                    </div>
                </div>
                <ul class="elivi">
                    <li class="fac"><Link to="/" >INICIO</Link></li>
                    <li class="fac"><Link to="/Pizza">MENÚ</Link></li>
                    <li class="fac"><Link to="/Contact"> NOSOTROS</Link></li>
                </ul>


            </nav>
        </div>
    )
}

export default Header;