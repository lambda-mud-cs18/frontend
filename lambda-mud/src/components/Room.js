import React, { Component } from 'react'
import styled from 'styled-components';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';



export default class Room extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {
    return (
      <StyledRoomBar>
        <Card style={{ backgroundColor: 'lightgray' }}>
          <CardBody style={{ textAlign: 'left' }}>
            <CardTitle style={{ fontWeight: 'bolder' }}>Room {this.props.room_id}  ||  {this.props.coords}  || {this.props.title}</CardTitle>
            {/* <CardTitle style={{ fontWeight: 'bolder' }}>{this.props.title}</CardTitle> */}
            <CardSubtitle>{this.props.description}</CardSubtitle>
            <CardTitle style={{ fontWeight: 'bolder' }}>Items:</CardTitle>
            <CardSubtitle className="exits">{this.props.items.map(item => (
              <ul>
                <li>{item}</li>
              </ul>))}
            </CardSubtitle>
            <CardTitle className="exits" style={{ fontWeight: 'bolder' }}>Available Exits:
            {this.props.exits.map(exit => (
              <p>{exit}</p>
            ))}
            </CardTitle>
          </CardBody>
        </Card>
      </StyledRoomBar>
    )
  }
}

const StyledRoomBar = styled.div`
    margin: 0 auto
    display: flex;
    flex-direction: column;
    .exits {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 12px
    }

    `