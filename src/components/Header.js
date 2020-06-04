import React from 'react';
import '../style/Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="SideMenu-container">
                <h1 className="SideMenu-h1">PIZZERIA ACAMICA</h1>
            </div >
            <nav>
                <div id="menuA">
                    <div href="#" className="showhim"><span className="menumov"> &#8803;</span>
                        <div className="showme">
                            <li><Link to="/" >INICIO</Link></li>
                            <li><Link to="/Pizza">MENÚ</Link></li>
                            <li><Link to="/Contact"> NOSOTROS</Link></li>
                        </div>
                    </div>
                </div>
                <ul className="elivi">
                    <li className="fac"><Link to="/" >INICIO</Link></li>
                    <li className="fac"><Link to="/Pizza">MENÚ</Link></li>
                    <li className="fac"><Link to="/Contact"> NOSOTROS</Link></li>
                </ul>


            </nav>
        </div>
    )
}

export default Header;