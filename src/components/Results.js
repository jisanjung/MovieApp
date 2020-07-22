import React, { Component } from 'react';
import Search from "./Search.js";
import Item from "./Item.js";
import axios from "axios";

export class Results extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            movies: []
        }
    }

    // handle event when form is submitted
    handleSubmit(e) {
        e.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=b2768da444ca6ca13d3a6180597e85f0&query=${this.state.query}`)
            .then(res => {
                console.log(res);
                this.setState({
                    movies: [...res.data.results]
                }, () => {
                    console.log(this.state.movies)
                });
            });
    }

    // handle input change
    inputChange(e) {
        let input = e.target.value;
        this.setState({
            query: input
        });
    }

    render() {
        return (
            <section className="w-100">
                <Search handleSubmit={this.handleSubmit.bind(this)} inputChange={this.inputChange.bind(this)}/>
                <Item data={this.state.query}/>
            </section>
        )
    }
}

export default Results
