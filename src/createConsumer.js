import React, { createContext } from 'react'
const { Provider, Consumer } = createContext()

const createConsumer = Component => () => (
  <Consumer>
    { context => <Component { ...context } />  }       
  </Consumer>
)

export { Provider, createConsumer }