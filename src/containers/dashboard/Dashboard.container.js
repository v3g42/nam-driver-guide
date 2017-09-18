import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, ActivityIndicator } from 'react-native'
import Button from 'react-native-button'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import styles from './dashboard.styles'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      coords: [],
    }
  }

  render() {
    const { currentLocation, router } = this.props

    if (!currentLocation)
      return (
        <View style={styles.container}>
          <ActivityIndicator style={styles.spiner} color={'red'} />
        </View>
      )

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          region={currentLocation}
          initialRegion={currentLocation}
        >
          {router &&
            <MapView.Polyline
              coordinates={router}
              strokeWidth={2}
              strokeColor="red"
            />}

          {currentLocation &&
            <MapView.Marker coordinate={currentLocation}>
              <Icon name="ios-locate" size={35} color="red" />
            </MapView.Marker>}
        </MapView>
        <Button containerStyle={styles.nextStop}>
          <Image
            style={styles.stopIcon}
            source={require('../../assets/deliveryPlace.png')}
          />
          <Text>
            139/26/4 đường số 9, KP5, phường Linh Tây, quận Thủ Đức, TPHCM
          </Text>
        </Button>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  act: bindActionCreators(actions, dispatch),
})

const mapStateToProps = state => {
  const currentLocation = state.location.currentLocation
  const router = state.location.router
  return {
    currentLocation,
    router,
  }
}

LoginContainer.propTypes = {
  currentLocation: React.PropTypes.object,
  router: React.PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
