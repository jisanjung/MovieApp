import React, { Component } from 'react'

export class Item extends Component {
    render() {
        let movie = this.props.movie;
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
                <h5>{movie.title}</h5>
                <span className="rating">{movie.vote_average}</span>
            </div>
        )
    }
}

export default Item
