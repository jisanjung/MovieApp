import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (
            <form className="flex" onSubmit={this.props.handleSubmit}>
                <input type="text" placeholder="Search for any movie..." onChange={this.props.inputChange}/>
            </form>
        )
    }
}

export default Search
