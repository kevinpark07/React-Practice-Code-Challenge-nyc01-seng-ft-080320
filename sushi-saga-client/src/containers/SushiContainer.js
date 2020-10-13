import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';


class SushiContainer extends React.Component {
  
  renderSushi = () => {
    return this.props.sushiArray.map(sushi => <Sushi key={sushi.id} balance={this.props.balance} clickHandler={this.props.clickHandler} sushi={sushi} />)
  }


  render () {

  return (
      <div className="belt">
        {this.renderSushi()}
        <MoreButton clickHandler={this.props.sushiHandler} />
      </div>
  )
      }
}

export default SushiContainer