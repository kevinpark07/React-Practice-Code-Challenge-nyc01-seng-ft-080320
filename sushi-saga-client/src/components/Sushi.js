import React, { Fragment } from 'react'

const Sushi = (props) => {
  
  const sushiHandle = () => {
    props.wallet >= props.sushi.price ?
    props.sushiHandler(props.sushi) :
    null
  }
  
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={sushiHandle}>
        { 
          props.eaten.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi