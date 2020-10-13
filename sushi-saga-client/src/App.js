import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    api: [],
    eatenSushi: [],
    wallet: 150,
    startIndex: 0,
    endIndex: 4
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(sushiData => this.setState({
      api: sushiData
    }))
  }

  sushiEaten = sushi => {
    console.log("I've been eaten: ", sushi);
    let newBalance = this.state.wallet >= sushi.price ? this.state.wallet - sushi.price : this.state.wallet;
    this.setState(prevState => ({
      eatenSushi: sushi.price <= prevState.wallet ? [...prevState.eatenSushi, sushi] : prevState.eatenSushi,
      wallet: newBalance
    }))
  }

  moreSushiHandler = () => {
    this.setState(prevState => ({
      startIndex: prevState.startIndex + 4,
      endIndex: prevState.endIndex + 4
    }))
   }

   sushiArray = () => {
    return this.state.api.slice(this.state.startIndex, this.state.endIndex)
    }


  render() {

    return (
      <div className="app">
        <SushiContainer balance={this.state.wallet} sushiHandler={this.moreSushiHandler} clickHandler={this.sushiEaten} sushiArray={this.sushiArray()} />
        <Table eatenSushi={this.state.eatenSushi} price={this.state.wallet} />
      </div>
    );
  }
}

export default App;