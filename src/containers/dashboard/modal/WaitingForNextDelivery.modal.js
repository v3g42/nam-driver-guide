import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import styles from './waitingForNextDelivery.style'
// eslint-disable-next-line
class WaitingForNextDelivery extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Icon name="ios-done-all" size={190} color="green" />
          <Text style={styles.message}>
            Done, you've reached the current delivery. Please take a rest while
            wait for next delivery!
          </Text>
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
