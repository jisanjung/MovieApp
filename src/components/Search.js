import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (
            <form className="flex ml-5" onSubmit={this.props.handleSubmit}>
                <input type="text" placeholder="Search for any movie..." onChange={this.props.inputChange} className="form-control text-white bg-dark ml-4"/>
            </form>
        )
    }
}

export default Search
