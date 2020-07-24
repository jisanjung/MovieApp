import React, { Component } from 'react'

export class Item extends Component {
    render() {
        let movie = this.props.movie;
        return (
            <div onClick={this.props.setDetails} style={{ width: "300px", height: "450px"}} className="mb-5 m-3 mt-5">

                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="h-100 w-100" style={{ objectFit: "cover" }}/>

                <div className="flex flex-between p-2">
                    <h5>{movie.title}</h5>
                    <span className="rating text-warning">{movie.vote_average}/10</span>
                </div>

            </div>
        )
    }
}

export default Item
