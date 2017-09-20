import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, ActivityIndicator, ListView } from 'react-native'
import Button from 'react-native-button'
import MapView from 'react-native-maps'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import styles from './dashboard.styles'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      region: null,
      visitedListZIndex: 0,
    }

    this.visitedDataSource = ds.cloneWithRows([])
  }

  render() {
    const { currentLocation, visitedStop, delivery, router } = this.props

    if (!currentLocation)
      return (
        <View style={styles.container}>
          <ActivityIndicator style={styles.spiner} color={'red'} />
        </View>
      )

    this.visitedDataSource = ds.cloneWithRows(visitedStop)

    return (
      <View style={styles.container}>
        {this.renderMapView(currentLocation, delivery, router)}
        {this.renderGoToCurrentLocationFloatButton()}
        {this.renderAnimatableVisitedList()}
      </View>
    )
  }

  onPressGotoCurrentLocationButton = () => {
    this.setState({
      region: this.props.currentLocation,
    })
    setTimeout(() => {
      this.setState({
        region: null,
      })
    }, 1000)
  }

  hideVisitedDoneList = () => {
    if (this.state.visitedListZIndex === 1000) {
      this.visitedListView.fadeOutDownBig().then(() => {
        this.setState({
          visitedListZIndex: 0,
        })
      })
    }
  }

  toogleVisitedDoneList = () => {
    if (!this.visitedListView) return

    if (this.state.visitedListZIndex === 0) {
      this.setState({
        visitedListZIndex: 1000,
      })
      this.visitedListView.fadeInUpBig()
    } else this.hideVisitedDoneList()
  }

  renderCompletedRow = rowData => {
    return (
      <View style={styles.visitedDoneRow}>
        <Icon name="check-circle-outline" size={60} color="green" />
        <Text style={styles.visitedDoneRowText}>
          {rowData.address}
        </Text>
      </View>
    )
  }

  renderMapView = (currentLocation, delivery, router) => {
    return (
      <MapView
        onPress={this.hideVisitedDoneList}
        region={this.state.region}
        style={styles.mapView}
        initialRegion={currentLocation}
      >
        {currentLocation &&
          <MapView.Marker coordinate={currentLocation}>
            <Icon name="motorbike" size={30} color="red" />
          </MapView.Marker>}
        {delivery &&
          delivery.pickUp &&
          <MapView.Marker coordinate={delivery.pickUp}>
            <Icon name="basket-fill" size={30} color="red" />
            <Text>Pick up</Text>
          </MapView.Marker>}
        {delivery &&
          delivery.dropOff &&
          <MapView.Marker coordinate={delivery.dropOff}>
            <Icon name="basket-unfill" size={30} color="red" />
            <Text>Dropoff</Text>
          </MapView.Marker>}

        {router.coords &&
          <MapView.Polyline
            coordinates={router.coords}
            strokeWidth={5}
            strokeColor="blue"
          />}
      </MapView>
    )
  }

  renderGoToCurrentLocationFloatButton = () => {
    return (
      <Button
        onPress={this.onPressGotoCurrentLocationButton}
        containerStyle={styles.currentPosButton}
      >
        <Icon
          name="crosshairs-gps"
          size={23}
          style={styles.currentPosButtonIcon}
          color="red"
        />
      </Button>
    )
  }

  renderBottomInfoButton = (currentStop, toCurrentStop) => {
    return (
      <Button
        containerStyle={styles.nextStop}
        onPress={this.toogleVisitedDoneList}
      >
        <Image
          style={styles.stopIcon}
          source={require('../../assets/deliveryPlace.png')}
        />
        {currentStop &&
          <Text style={styles.nextStopText}>
            {`${currentStop.address}  ${toCurrentStop.endAddress
              ? `-- ${toCurrentStop.endAddress}`
              : ''}`}
          </Text>}
        {!currentStop && <Text style={styles.nextStopText}>No delivery</Text>}
      </Button>
    )
  }

  renderAnimatableVisitedList = () => {
    return (
      <Animatable.View
        ref={ref => (this.visitedListView = ref)}
        animation="fadeInUpBig"
        style={[
          styles.hiddenVisitedDoneList,
          { zIndex: this.state.visitedListZIndex },
        ]}
      >
        <Text style={styles.textDoneList}>Done list</Text>

        <ListView
          dataSource={this.visitedDataSource}
          renderRow={rowData => this.renderCompletedRow(rowData)}
        />
      </Animatable.View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  act: bindActionCreators(actions, dispatch),
})

const mapStateToProps = state => {
  const currentLocation = state.location.currentLocation
  const router = state.location.router
  const currentStop = state.delivery.currentStop
  const toCurrentStop = state.delivery.toCurrentStop
  const visitedStop = state.delivery.visitedStop
  const delivery = state.delivery.delivery
  return {
    currentLocation,
    router,
    currentStop,
    visitedStop,
    toCurrentStop,
    delivery,
  }
}

Dashboard.propTypes = {
  currentLocation: React.PropTypes.object,
  visitedStop: React.PropTypes.array,
  delivery: React.PropTypes.object,
  router: React.PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
