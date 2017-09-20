import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Button from 'react-native-button'
import { Actions as scenes } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import styles from './newDeliveryCome.style'

class WaitingForNextDelivery extends React.Component {
  closeModal = () => {
    scenes.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Animatable.View
            ref={ref => (this.visitedListView = ref)}
            animation="bounce"
            iterationCount="infinite"
            style={styles.animatableView}
          >
            <Icon name="ios-pin-outline" size={190} color="red" />
          </Animatable.View>
          <Text style={styles.message}>
            New delivery added. Please see the new router in the map.
          </Text>
          <Button style={styles.closeButton} onPress={this.closeModal}>
            OK
          </Button>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  act: bindActionCreators(actions, dispatch),
})

const mapStateToProps = () => {
  return {}
}

WaitingForNextDelivery.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(
  WaitingForNextDelivery
)
