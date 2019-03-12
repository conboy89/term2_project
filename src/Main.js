import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Memes from "./Memes";
import About from "./About";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                        <div class="logo">
                            <h1 class="text">Random Joke Website</h1>
                        </div>
                            <ul className="header">
                                <li><NavLink as="div" exact to="/">Home</NavLink></li>
                                <li><NavLink to="/memes">Memes</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                            </ul>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/memes" component={Memes}/>
                            <Route path="/about" component={About}/>
                        </div>
                        <div className="footer">
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/memes">Memes</a></li>
                            <li><a href="/about">About Us</a></li>
                            </ul>    
                        </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
