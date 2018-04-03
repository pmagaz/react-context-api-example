import React, { Component } from 'react'

import { createStore } from './createStore'
import { Provider } from './createConsumer'
import MyContainer from './MyContainer'

class App extends Component {
  state = { count: 0 } 
  render() {
    return (
      <Provider value={ createStore(this) }> 
        <MyContainer />
      </Provider>
    )
  }
}

export default App;