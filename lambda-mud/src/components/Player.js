import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class Player extends Component {
  render() {
    return (
      <StyledPlayerBar>
        <Card style={{ backgroundColor: 'lightPink' }}>
          <CardBody style={{ textAlign: 'left' }}>
            <CardTitle style={{ fontWeight: 'bolder' }}>You are {this.props.name}</CardTitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Gold: {this.props.gold}</CardTitle>
            <CardSubtitle>{this.props.description}</CardSubtitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Encumbrance: {this.props.encumbrance}</CardTitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Strength: {this.props.strength}</CardTitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Inventory: {this.props.inventory}</CardTitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Cooldown: {this.props.cooldown} sec</CardTitle>
            <div className="directionalButtons" >
              <Button onClick={this.props.moveNorth}>N</Button>
              <Button onClick={this.props.moveSouth}>S</Button>
              <Button onClick={this.props.moveEast}>E</Button>
              <Button onClick={this.props.moveWest}>W</Button>
            </div>
            <div className="actionButtons">
              <Button>Examine</Button>
              <Button>Pray</Button>
              <Button onClick={this.props.take}>Pick Up Treasure</Button>
              <Button onClick={this.props.drop}>Drop Treasure</Button>
              <Button onClick={this.props.sell}>Sell Treasure</Button>
              <Button>Extra Button</Button>
            </div>
          </CardBody>
        </Card>
      </StyledPlayerBar>
    )
  }
}

const StyledPlayerBar = styled.div`
width: 370;
height: 100%;
display: flex;
.directionalButtons {
  display: flex;
}
.actionButtons {
  display: flex;
  flex-direction: column
}

`