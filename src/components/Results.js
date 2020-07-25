import React, { Component } from 'react';
import Search from "./Search.js";
import Item from "./Item.js";
import Details from "./Details.js";
import Error from "./Error.js";
import axios from "axios";

export class Results extends Component {
    constructor() {
        super();
        this.state = {
            query: "",
            endpoint: "https://api.themoviedb.org/3/trending/all/day?api_key=b2768da444ca6ca13d3a6180597e85f0",
            movies: [],
            details: [],
            error: "",
            showDetails: false
        }
    }

    // trending movies
    componentDidMount() {
        axios.get(this.state.endpoint)
            .then(res => {
                this.setState({
                    movies: [...res.data.results]
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message
                }, () => {
                    console.log(this.state.error)
                });
            });
    }

    // handle event when form is submitted
    handleSubmit(e) {
        e.preventDefault();

        let newEndpoint = `https://api.themoviedb.org/3/search/movie/?api_key=b2768da444ca6ca13d3a6180597e85f0&query=${this.state.query}`;

        this.setState({
            endpoint: newEndpoint
        }, () => {
            axios.get(this.state.endpoint)
            .then(res => {
                this.setState({
                    movies: [...res.data.results]
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message
                }, () => {
                    console.log(this.state.error)
                });
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

    // close movie details
    closeDetails() {
        this.setState({
            showDetails: false
        });
    }

    // more details when single movie (Item component) is clicked
    setDetails(id) {

        this.setState({
            showDetails: true
        }, () => {
            console.log(this.state.showDetails);
        });

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

                <Details details={this.state.details} activate={this.state.showDetails} close={this.closeDetails.bind(this)}/>
                <Error error={this.state.error}/>

                <div className="flex flex-wrap flex-center pb-5">
                    {this.state.movies.map((movie) => <Item key={movie.id} movie={movie} setDetails={this.setDetails.bind(this, movie.id)}/>)}
                </div>
            </section>
        )
    }
}

export default Results
