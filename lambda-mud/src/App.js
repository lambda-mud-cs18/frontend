import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import HeaderBar from './components/HeaderBar';
import Room from './components/Room.js';
import Player from './components/Player.js';
import AxiosWithAuth from './components/AxiosWithAuth.js';
import TreasureMap from './components/TreasureMap.js';
import styled from 'styled-components';
// import '../node_modules/react-vis/dist/style.css';
// import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';
// import data from './data/data.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      room_id: null,
      title: '',
      description: null,
      coords: [],
      players: [],
      items: [],
      exits: [],
      cooldown: 2.0,
      errors: [],
      messages: [],
      name: null,
      encumbrance: null,  // How much are you carrying?
      strength: null,  // How much can you carry?
      speed: null,  // How fast do you travel?
      gold: null,
      inventory: [],
      status: [],
      graph: {},
      allLinks: [],
      allCoords: [],
      graphLoaded: false,
      playerToken: ""

    }
  }

  componentDidMount() {

    AxiosWithAuth()
      .get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/')
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, players: res.data.players, coords: res.data.coordinates, cooldown: res.data.cooldown })
      })
      .catch(err => console.log(err))

    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/status/')
      .then(res => {
        console.log((res));
        this.setState({ name: res.data.name, gold: res.data.gold, encumbrance: res.data.encumbrance, strength: res.data.strength })
      })
      .catch(err => console.log(err))
  }

  signIn = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  AxiosWithAuth = () => {
    return axios.create({
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.state.playerToken}`,
      }
    })
  }

  moveNorth = () => {
    const direction = { "direction": "n" }
    this.AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, coords: res.data.coordinates, players: res.data.players, cooldown: res.data.cooldown })
      })
      .catch(err => console.log(err))
  }

  moveSouth = () => {
    const direction = { "direction": "s" }
    this.AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, coords: res.data.coordinates, players: res.data.players, cooldown: res.data.cooldown })
      })
      .catch(err => console.log(err))
  }

  moveEast = () => {
    const direction = { "direction": "e" }
    this.AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, coords: res.data.coordinates, players: res.data.players, cooldown: res.data.cooldown })
      })
      .catch(err => console.log(err))
  }

  moveWest = () => {
    const direction = { "direction": "w" }
    this.AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, coords: res.data.coordinates, players: res.data.players, cooldown: res.data.cooldown })
      })
      .catch(err => console.log(err))
  }

  pickUpTreasure = () => {
    const take = { "name": "treasure" }
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', take)
      .then(res => {
        console.log((res));
        this.setState({ encumbrance: res.data.encumbrance, items: res.data.items, inventory: res.data.inventory })
      })
      .catch(err => console.log(err))
  }

  dropTreasure = () => {
    const drop = { "name": "treasure" }
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/', drop)
      .then(res => {
        console.log((res));
        this.setState({ encumbrance: res.data.encumbrance, items: res.data.items, inventory: res.data.inventory })
      })
      .catch(err => console.log(err))
  }

  sellTreasure = () => {
    const sell = { "name": "treasure" }
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/drop/', sell)
      .then(res => {
        console.log((res));
        this.setState({ encumbrance: res.data.encumbrance, items: res.data.items, inventory: res.data.inventory })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <HeaderBar />
        <StyledMainApp>
          <TreasureMap
          />
          <Player
            name={this.state.name}
            gold={this.state.gold}
            encumbrance={this.state.encumbrance}
            strength={this.state.strength}
            inventory={this.state.inventory}
            cooldown={this.state.cooldown}
            moveNorth={this.moveNorth}
            moveSouth={this.moveSouth}
            moveEast={this.moveEast}
            moveWest={this.moveWest}
            take={this.pickUpTreasure}
            drop={this.dropTreasure}
          />
          <Room
            room_id={this.state.room_id}
            title={this.state.title}
            description={this.state.description}
            coords={this.state.coords}
            exits={this.state.exits}
            players={this.state.players}
            items={this.state.items}
            players={this.state.players}
            moveNorth={this.moveNorth}
            moveSouth={this.moveSouth}
            moveEast={this.moveEast}
            moveWest={this.moveWest}
            take={this.pickUpTreasure}
            drop={this.dropTreasure}
            sell={this.sellTreasure}
          />
        </StyledMainApp>
      </div>
    );
  }
}

const StyledMainApp = styled.div`
  display: flex;
  margin: 0 auto
  height: calc(100vh - 120px);
  align-items: center;
  flex-wrap: wrap;
  .log-container {
    width: 289px;
    margin-top: 2rem;
    background: #f5f5f5;
    border: 2px solid #7dcdbe;
    border-radius: 10px;
    padding: 1rem;
    .log-label {
      margin-right: 1rem;
    }
  }
`


export default App;