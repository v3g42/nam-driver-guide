import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Reducer } from 'react-native-router-flux'
import scenes from '../routes'
import actions from '../actions'
import * as t from '../actionTypes'

// hook into router's store so we can listen for actions
const reducerCreate = params => {
  const defaultReducer = Reducer(params)
  return (state, action) => {
    if (action.type === 'REACT_NATIVE_ROUTER_FLUX_FOCUS') {
      actions[t.SCENE_FOCUS](action.scene.sceneKey)
    }
    return defaultReducer(state, action)
  }
}

const Routes = props =>
  <Router
    scenes={scenes}
    createReducer={params => reducerCreate(params, props.actions)}
  />

Routes.propTypes = {
  actions: React.PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(Routes)
