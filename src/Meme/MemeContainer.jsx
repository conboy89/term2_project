import React, { Component } from "react";
import MemePresentation from "./MemePresentation"

const getCats = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const options = {
        headers: {
            "X-API-KEY": "188d17c2-e814-439c-a11f-d3f39b651dea"
        }
    }
    const response = await fetch(url, options)
    const cats = await response.json();
    console.log(cats);
    return cats;
}

class Memes extends Component {
    state = {cats: []};
    async componentDidMount() {
        console.log("here")
        const cats = await getCats();
        this.setState({cats})
    }

    render() {
        return (
            <MemePresentation cats={this.state.cats} />
        );
    }
}

export default Memes;