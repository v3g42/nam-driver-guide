import React from 'react'
import { Actions, Scene, ActionConst, Modal } from 'react-native-router-flux'
// eslint-disable-next-line no-unused-vars
import { Image, View, Text, StatusBar, Platform } from 'react-native'
import * as c from '../constants'
// scene containers
import Dashboard from '../containers/dashboard/Dashboard.container'
import WaitingForNextDelivery from '../containers/dashboard/waitingForNextDeliveryModal/WaitingForNextDelivery.modal'
import NewDeliveryCome from '../containers/dashboard/newDeliveryComeModal/NewDeliveryCome.modal'
import CopyToken from '../containers/dashboard/copyToken/copyToken.modal'

const scenes = Actions.create(
  <Scene key="modal" component={Modal}>
    <Scene key="root">
      <Scene
        hideNavBar
        key={c.DASHBOARD}
        component={Dashboard}
        type={ActionConst.REPLACE}
      />
    </Scene>
    <Scene
      key={c.WAITING_FOR_NEXT_DELIVERY_MODAL}
      component={WaitingForNextDelivery}
    />

    <Scene key={c.NEW_DELIVERY_ADDED_MODAL} component={NewDeliveryCome} />
    <Scene key={c.COPY_TOKEN} component={CopyToken} />
  </Scene> // eslint-disable-line comma-dangle
)

export default scenes
