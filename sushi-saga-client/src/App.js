import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    api: [],
    startIndex: 0,
    endIndex: 4,
    eatenSushi: [],
    wallet: 100
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(data => this.setState({api: data}))
  }

  sushiArray = () => {
    return this.state.api.slice(this.state.startIndex, this.state.endIndex)
  }

  sushiEaten = sushiObj => {
    this.setState(prevState => ({
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      wallet: prevState.wallet >= sushiObj.price ? prevState.wallet - sushiObj.price : prevState.wallet
    }))
  }

  moreSushi = () => {
    
    this.state.startIndex === 96 ?
    this.setState({
      startIndex: 0,
      endIndex: 4
    }) 
    :
    this.setState(prevState => ({
      startIndex: prevState.startIndex + 4,
      endIndex: prevState.endIndex + 4
    }))
  }

  addFunds = amount => {
    this.setState(prevState => ({ 
      wallet: prevState.wallet + parseInt(amount)
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer wallet={this.state.wallet} moreSushiHandler={this.moreSushi} sushiArray={this.sushiArray()} sushiHandler={this.sushiEaten} eatenSushi={this.state.eatenSushi} />
        <Table addFundHandle={this.addFunds} eatenSushi={this.state.eatenSushi} wallet={this.state.wallet} addFunds={this.addFunds} />
      </div>
    );
  }
}

export default App;