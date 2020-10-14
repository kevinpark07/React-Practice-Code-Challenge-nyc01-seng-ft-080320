import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.sushiArray.map(sushi => <Sushi key={sushi.id} wallet={props.wallet} sushi={sushi} sushiHandler={props.sushiHandler} eaten={props.eatenSushi} /> )
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton moreSushi={props.moreSushiHandler} />
      </div>
    </Fragment>
  )
}

export default SushiContainer