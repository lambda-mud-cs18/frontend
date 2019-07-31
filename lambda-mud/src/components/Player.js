import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Player extends Component {
    render() {
        return (
            <div>
                {/* <h2>Player ID: {this.props.name}</h2>
                <h4>Gold {this.props.gold} </h4>
                <h4>Encumbrance {this.props.encumbrance}</h4> */}
            
                <div>
                    <Card style={{backgroundColor: 'lightPink'}}>
                        <CardBody style={{textAlign: 'left'}}>
                            <CardTitle style={{fontWeight: 'bolder'}}>{this.props.name}</CardTitle>
                            <CardTitle style={{fontWeight: 'bolder'}}>Gold: {this.props.gold}</CardTitle>
                            <CardSubtitle>{this.props.description}</CardSubtitle>
                            <CardTitle style={{fontWeight: 'bolder'}}>Encumbrance {this.props.encumbrance}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            
            </div>

            
        )
    }
}
