import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



export default class Room extends Component {
    constructor() {
    super();
    this.state = {
 
    }
}



    render() {
        return (
            <div>
                {/* <h3>Room ID: {this.props.room_id}</h3>
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
                <h3>Possible Exits: {this.props.exits}</h3> */}

                

                <div>
                    <Card style={{backgroundColor: 'lightgray'}}>
                        <CardBody style={{textAlign: 'left'}}>
                        <CardTitle style={{fontWeight: 'bolder'}}>Room {this.props.room_id}</CardTitle>
                        <CardTitle style={{fontWeight: 'bolder'}}>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.description}</CardSubtitle>
                        <CardTitle style={{fontWeight: 'bolder'}}>Items:</CardTitle>
                        <CardSubtitle>{this.props.items.map(item => (
                            <ul>
                                <li>{item}</li>
                            </ul>))}
                        </CardSubtitle>
                        <CardTitle style={{fontWeight: 'bolder'}}>Available Exits: {this.props.exits}</CardTitle>
                        {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        {/* <Button>Button</Button> */}
                        </CardBody>
                    </Card>
                    </div>
            </div>
        )
    }
}
