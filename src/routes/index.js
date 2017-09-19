import React from 'react'
import { Actions, Scene, ActionConst, Modal } from 'react-native-router-flux'
// eslint-disable-next-line no-unused-vars
import { Image, View, Text, StatusBar, Platform } from 'react-native'
import * as c from '../constants'
// scene containers
import Dashboard from '../containers/dashboard/Dashboard.container'
import WaitingForNextDelivery from '../containers/dashboard/modal/WaitingForNextDelivery.modal'

const titleStyle = {
  color: 'white',
}

const scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene
        hideNavBar
        title="Google Map"
        titleStyle={titleStyle}
        key={c.DASHBOARD}
        component={Dashboard}
        type={ActionConst.REPLACE}
      />
    </Scene>
    <Scene
      key={c.WAITING_FOR_NEXT_DELIVERY_MODAL}
      component={WaitingForNextDelivery}
    />
  </Scene> // eslint-disable-line comma-dangle
)

export default scenes
