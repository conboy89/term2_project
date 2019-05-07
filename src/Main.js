import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Memes from "./Meme/MemeContainer";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                        <nav>
                            <div className="header">
                                <h1 className="logo">Random Joke Website</h1>
                                <ul className="main-nav">
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink to="/memes">Memes</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/memes" component={Memes}/>
                        </div>
                        <div className="footer">
                            <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/memes">Memes</a></li>
                            </ul>    
                        </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
