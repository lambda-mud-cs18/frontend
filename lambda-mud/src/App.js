import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/react-vis/dist/style.css';
import { FlexibleXYPlot, LineSeries, MarkSeries } from 'react-vis';
import Room from './components/Room.js'
import Player from './components/Player.js'
import AxiosWithAuth from './components/AxiosWithAuth.js'
import Buttons from './components/Buttons.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
        room_id: null,
        title: null,
        description: null,
        coordinates: "?",
        players:[],
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

    }
}

componentDidMount() {

  AxiosWithAuth()
      .get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/')
      .then(res => {
          console.log((res));
          this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items, players: res.data.players})
      })
      .catch(err => console.log(err))

  AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/status/')
      .then(res => {
          console.log((res));
          this.setState({ name: res.data.name, gold: res.data.gold, encumbrance: res.data.encumbrance })
      })
      .catch(err => console.log(err))
}

  
moveNorth = () => {
  const direction = {"direction":"n"}
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items })
    })
      .catch(err => console.log(err))
  }

moveSouth = () => {
  const direction = {"direction":"s"}
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items })
      })
        .catch(err => console.log(err))
    }

moveEast = () => {
  const direction = {"direction":"e"}
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items })
    })
      .catch(err => console.log(err))
  }

moveWest = () => {
  const direction = {"direction":"w"}
    AxiosWithAuth()
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', direction)
      .then(res => {
        console.log((res));
        this.setState({ room_id: res.data.room_id, title: res.data.title, description: res.data.description, exits: res.data.exits, items: res.data.items })
      })
        .catch(err => console.log(err))
    }

pickUpTreasure = () => {
  const take = { "name" : "treasure"}
  AxiosWithAuth()
  .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/', take)
  .then(res => {
    console.log((res));
    this.setState({ encumbrance: res.data.encumbrance})
})
  .catch(err => console.log(err))
}

  render() {

    return (
      <div className="App">
        <Room 
          room_id = {this.state.room_id}
          title = {this.state.title}
          description = {this.state.description}
          exits = {this.state.exits}
          items = {this.state.items}
          players = {this.state.players}
        />
        <Buttons 
          moveNorth = {this.moveNorth}
          moveSouth = {this.moveSouth}
          moveEast = {this.moveEast}
          moveWest = {this.moveWest}
          take = {this.pickUpTreasure}
        
        />
        <Player 
          name = {this.state.name}
          gold = {this.state.gold}
          encumbrance = {this.state.encumbrance}
        
        />
      </div>
    );
  }
}

export default App;