import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.data}</h1>
            </div>
        )
    }
}

export default Item
