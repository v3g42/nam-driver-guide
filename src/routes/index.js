import React from 'react'
import { Actions, Scene, ActionConst, Modal } from 'react-native-router-flux'
// eslint-disable-next-line no-unused-vars
import { Image, View, Text, StatusBar, Platform } from 'react-native'
import * as c from '../constants'
import color from '../configs/colors.config'
// scene containers
import Dashboard from '../containers/dashboard/Dashboard.container'

const sceneStyle = {
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
}
const titleStyle = {
  color: 'white',
}

const navStyle = {
  backgroundColor: color.mainColor,
}

const scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene
        initial
        navigationBarStyle={navStyle}
        title="Dashboard"
        titleStyle={titleStyle}
        key={c.DASHBOARD}
        component={Dashboard}
        type={ActionConst.REPLACE}
        sceneStyle={sceneStyle}
      />
    </Scene>
  </Scene> // eslint-disable-line comma-dangle
)

export default scenes
