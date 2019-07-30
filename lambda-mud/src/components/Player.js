import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div>
                <h2>Player ID: {this.props.name}</h2>
                <h4>Gold {this.props.gold} </h4>
                <h4>Encumbrance {this.props.encumbrance}</h4>
            </div>
        )
    }
}
