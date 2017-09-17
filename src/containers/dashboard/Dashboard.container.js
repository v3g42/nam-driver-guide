import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import styles from './dashboard.styles'

// eslint-disable-next-line
class LoginContainer extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return <View style={styles.container} />
  }
}

const mapDispatchToProps = dispatch => ({
  act: bindActionCreators(actions, dispatch),
})

const mapStateToProps = () => {
  return {}
}

LoginContainer.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
