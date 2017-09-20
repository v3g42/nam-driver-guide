import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Button from 'react-native-button'
import { Actions as scenes } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import styles from './waitingForNextDelivery.style'

class WaitingForNextDelivery extends React.Component {
  closeModal = () => {
    scenes.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Icon name="ios-checkmark-circle" size={190} color="green" />
          <Text style={styles.message}>
            Done, you've reached the current delivery. Please take a rest while
            waiting for next delivery!
          </Text>
          <Button style={styles.closeButton} onPress={this.closeModal}>
            Close
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
