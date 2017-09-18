/*  eslint-disable */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import actions from './actions'
import store from './configs/store.config'
import * as t from './actionTypes'
import Router from './configs/router.config'

import './configs/styles.config'
import './configs/location.config'

class App extends Component {
  componentDidMount() {
    store.dispatch(actions[t.INIT_APP]())
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
