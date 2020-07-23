import React, { Component } from 'react';
import Search from "./Search.js";
import Item from "./Item.js";
import Details from "./Details.js";
import axios from "axios";

export class Results extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            movies: [],
            details: []
        }
    }

    // handle event when form is submitted
    handleSubmit(e) {
        e.preventDefault();

        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=b2768da444ca6ca13d3a6180597e85f0&query=${this.state.query}`)
            .then(res => {
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

    // more details when single movie (Item component) is clicked
    setDetails(id) {
        let target = this.state.movies.filter((movie, i) => {
            return id === movie.id
        });

        let { title, backdrop_path, release_date, overview } = target[0];
        this.setState({
            details: [title, backdrop_path, release_date, overview]
        }, () => {
            console.log(this.state.details);
        });
    }

    render() {
        return (
            <section className="w-100">
                <Search handleSubmit={this.handleSubmit.bind(this)} inputChange={this.inputChange.bind(this)}/>

                <Details details={this.state.details}/>
                
                <div className="flex flex-wrap">
                    {this.state.movies.map((movie) => <Item key={movie.id} movie={movie} setDetails={this.setDetails.bind(this, movie.id)}/>)}
                </div>
            </section>
        )
    }
}

export default Results
