import React, { Component } from 'react'
import axios from 'axios'

export default class Room extends Component {
    constructor() {
    super();
    this.state = {
 
    }
}

    render() {
        return (
            <div>
                <h3>Room ID: {this.props.room_id}</h3>
                <h3>Room Title: {this.props.title}</h3>
                <h3>Room Description: {this.props.description}</h3>
                <h3>Items: {this.props.items.map(item => (
                    <ul>
                        <li>{item}</li>
                    </ul>))}
                </h3>
                <h3>Players Here: {this.props.players.map(player => (
                   <ul>
                        <li>{player}</li>
                    </ul>))}
                </h3>
                <h3>Possible Exits: {this.props.exits}</h3>
            </div>
        )
    }
}
