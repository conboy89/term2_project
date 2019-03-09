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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button onClick={this.getJoke}>CLICK ME</button>
            {this.state.joke ? <div class="jokeofday">{this.state.joke}</div> : ""}
            </div>
        );
    }
}

export default Home;