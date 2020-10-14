import React, { Fragment } from 'react';
import Form from '../components/Form'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
        return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
      })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.wallet } remaining!
      </h1>
      <div className="table">
      <Form addFunds={props.addFunds} />
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table