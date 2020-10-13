import React, { Fragment } from 'react'

class Sushi extends React.Component {
  
state= {
  eaten: false
}

sushiHandle = () => {
  let currentBalance = this.props.balance - this.props.sushi.price
  this.props.clickHandler(this.props.sushi);
  this.setState({
    eaten: this.props.sushi.price >= currentBalance ? false : true
  })
}

  render () {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.sushiHandle}>
        { this.state.eaten ?
          <h3>Sushi has been eaten!</h3>
          :
          <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
    }
}

export default Sushi