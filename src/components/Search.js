import React, { Component } from 'react'

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    // change this state on change of input
    changeState(e) {
        this.setState({
            query: e.target.value
        }, this.props.fetchData(this.state.query));
    }

    render() {
        return (
            <form className="flex">
                <input type="text" placeholder="Search for any movie..." onChange={this.changeState.bind(this)}/>
            </form>
        )
    }
}

export default Search
