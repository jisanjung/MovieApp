import React, { Component } from 'react';
import Search from "./Search.js";
import Item from "./Item.js";

export class Results extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    // handle event when form is submitted
    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.query)
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
