import React, { Component } from 'react';
import Search from "./Search.js";
import Item from "./Item.js";

export class Results extends Component {

    // fetch data from api
    fetchData(value) {
        console.log(value);
    }

    render() {
        return (
            <section className="w-100">
                <Search fetchData={this.fetchData.bind(this)}/>
                <Item/>
            </section>
        )
    }
}

export default Results
