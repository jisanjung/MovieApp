import React, { Component } from 'react'

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <section>
                <form className="flex">
                    <input type="text"/>
                    <button type="button" className="btn btn-primary">Search</button>
                </form>
            </section>
        )
    }
}

export default Search
