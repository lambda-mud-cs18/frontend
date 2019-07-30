import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.moveNorth}>Move North</button>
                <button onClick={this.props.moveEast}>Move East</button>
                <button onClick={this.props.moveSouth}>Move South</button>
                <button onClick={this.props.moveWest}>Move West</button>
                <button onClick={this.props.take}>Pick Up Treasure</button>
                <button onClick={this.props.drop}>Drop Treasure</button>
            </div>
        )
    }
}
