import React, { Component } from "react";

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            joke: ""
        }
        this.getJoke = this.getJoke.bind(this);
    }

    async componentDidMount() {
        
    }

   async getJoke() {
       const url = "https://jokes.p.rapidapi.com/jod";
       const options = {
           headers: {
               "X-RapidAPI-Key": "kPqbr5vayJmshVV9UMjRmMhGXOzmp1pm6ImjsnoTZjp1O4phXu"
           }
       }
        const response = await fetch(url, options)
        const data = await response.json();
        const joke = data.contents.jokes[0].joke;
        this.setState({joke: joke.text})
    }

    render () {
        return (
            <div>
            
            <h2>Hello</h2>
            <p>
            Welcome the only website you will need to break then tension in any situation. Welcome to Random Joke website. Click button below for a random daily joke to be generated that you can use to impress your friends, open a presentation or just give yourself a small laugh to start the day. What are you waiting for, click the button to start your day with a smile.
            </p>

            <p>
            While you're here, don't forget to check out our dedicated cat section. How could you not smile when looking at our random generated selection of cats for you.
            </p>
            <button onClick={this.getJoke}>CLICK ME</button>
            {this.state.joke ? <div class="jokeofday">{this.state.joke}</div> : ""}
            </div>
        );
    }
}

export default Home;