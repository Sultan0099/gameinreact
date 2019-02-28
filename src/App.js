import React, { Component } from "react";
import World from "./features/world";
import Home from './home';
class App extends Component {
  state = {
    startGame: false,
    home : true 
  };
  startGame = ()=> {
    this.setState( { startGame : true , home : false })
  }
  render() {
    return (
      <div>
        <Home startGame = { this.startGame} home = { this.state.home}/>
        <div>{this.state.startGame && <World />}</div>
       
      </div>
    );
  }
}

export default App;
