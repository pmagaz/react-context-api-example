import React from 'react'

const ChildComponent = props => {
  return (<div>
    <button onClick={ () => props.actions.increment(1) }>increment</button> 
    <button onClick={ () => props.actions.decrement(1) }>decrement</button> 
    count: { props.state.count } 
  </div>)
}

export default ChildComponent