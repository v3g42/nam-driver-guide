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
    // should load it from RN config
    const enable_mock = true
    // location mock
    const state = store.getState()
    if (state.delivery.delivery && !state.delivery.delivery.done) {
      setInterval(() => {
        store.dispatch(actions[t.LOCATION_MOCK]())
      }, 1000)
    }
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
