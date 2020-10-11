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
    filteredArray: []
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(sushiData => this.setState({
      api: sushiData,
      filteredArray: sushiData
    }))
  }

  sushiEaten = sushi => {
    console.log("I've been eaten: ", sushi);
    let newBalance = this.state.wallet > sushi.price ? this.state.wallet - sushi.price : this.state.wallet;
    let newArray = this.state.filteredArray.filter(sush => sush.id !== sushi.id);
    this.setState({
      eatenSushi: sushi.price < this.state.wallet ? [...this.state.eatenSushi, sushi]:this.state.eatenSushi,
      wallet: newBalance,
      filteredArray: newArray
    })
  }

  moreSushiHandler = () => {
    this.setState({
      api: this.state.filteredArray
    })
   }


  render() {
    console.log(this.state.filteredArray)

    return (
      <div className="app">
        <SushiContainer balance={this.state.wallet} sushiHandler={this.moreSushiHandler} clickHandler={this.sushiEaten} sushiArray={this.state.api} />
        <Table eatenSushi={this.state.eatenSushi} price={this.state.wallet} />
      </div>
    );
  }
}

export default App;