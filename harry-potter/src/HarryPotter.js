import React, { Component } from 'react'
import './App.css';
import House from '../src/House.js';
import Character from '../src/Character';
import Houses from '../src/Houses';

export default class HarryPotter extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      length: 0,
      showNotableCharacter: false
    })
  }

  nextHouse = () => {
    if (this.state.length === 3) {
      this.setState({
        length: 0,
        showNotableCharacter: false
      })
    }
    else if (this.state.length < 3) {
      this.setState({
        length: this.state.length + 1,
        showNotableCharacter: false
      })
    }
  }

  notableCharacter = () => {
    this.setState({
      showNotableCharacter: true
    })
  }
  render() {

    return (
      <div>
        <h1>Harry Potter with React</h1>
        <div>
          <button onClick={this.nextHouse}>Next House</button>
          <button onClick={this.notableCharacter}>Notable Character</button>
          <House houses={Houses} length={this.state.length} />
          <Character houses={Houses} length={this.state.length} showNotableCharacter={this.state.showNotableCharacter} />
        </div>
      </div>
    )
  }
}

