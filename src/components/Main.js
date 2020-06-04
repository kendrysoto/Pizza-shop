import React from 'react';
import '../style/Contact.css'
import FullPizza from './FullPizza';
import { Switch, Route } from "react-router-dom";
import Form from './Form';
import Home from './Home';
import Contact from './Contact';

const Main = () => {
    return (
        <div className="boxMain">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Pizza-shop" component={Home} />
                <Route path="/Pizza" component={FullPizza} />
                <Route path="/Form" component={Form} />
                <Route exact path="/Contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default Main;