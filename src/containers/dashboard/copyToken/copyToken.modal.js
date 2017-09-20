import React from 'react'
import { connect } from 'react-redux'
import { View, Clipboard } from 'react-native'
import Toast from '@remobile/react-native-toast'
import Button from 'react-native-button'
import { Actions as scenes } from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import styles from './copyToken.style'

class WaitingForNextDelivery extends React.Component {
  constructor(props) {
    super(props)
    setTimeout(() => {
      this.closeModal()
    }, 2000)
  }
  closeModal = () => {
    Clipboard.setString(this.props.token)
    Toast.showLongTop('Token copied')
    scenes.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Button style={styles.closeButton} onPress={this.closeModal}>
            Click to copy FCM token
          </Button>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  act: bindActionCreators(actions, dispatch),
})

const mapStateToProps = state => {
  const token = state.notification.fcmToken
  return { token }
}

WaitingForNextDelivery.propTypes = { token: React.PropTypes.any }

export default connect(mapStateToProps, mapDispatchToProps)(
  WaitingForNextDelivery
)
