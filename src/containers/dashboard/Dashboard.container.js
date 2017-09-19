import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, ActivityIndicator, ListView } from 'react-native'
import Button from 'react-native-button'
import MapView from 'react-native-maps'
import * as Animatable from 'react-native-animatable' // eslint-disable-line
import Icon from 'react-native-vector-icons/Ionicons'
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
  onPressGotoCurrentPositionButton = () => {
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
        <Icon name="ios-done-all" size={60} color="green" />
        <Text style={styles.visitedDoneRowText}>
          {rowData.address}
        </Text>
      </View>
    )
  }

  render() {
    const {
      currentLocation,
      router,
      currentStop,
      visitedStop,
      toCurrentStop,
    } = this.props

    if (!currentLocation)
      return (
        <View style={styles.container}>
          <ActivityIndicator style={styles.spiner} color={'red'} />
        </View>
      )

    this.visitedDataSource = ds.cloneWithRows(visitedStop)

    return (
      <View style={styles.container}>
        <MapView
          onRegionChange={this.hideVisitedDoneList}
          onPress={this.hideVisitedDoneList}
          region={this.state.region}
          style={styles.mapView}
          initialRegion={currentLocation}
        >
          {router &&
            <MapView.Polyline
              coordinates={router}
              strokeWidth={5}
              strokeColor="blue"
            />}

          {currentLocation &&
            <MapView.Marker coordinate={currentLocation}>
              <Icon name="md-bicycle" size={30} color="red" />
            </MapView.Marker>}
        </MapView>

        <Button
          onPress={this.onPressGotoCurrentPositionButton}
          containerStyle={styles.currentPosButton}
        >
          <Icon
            name="ios-locate"
            size={23}
            style={styles.currentPosButtonIcon}
            color="red"
          />
        </Button>

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
        <Button
          containerStyle={styles.nextStop}
          onPress={this.toogleVisitedDoneList}
        >
          <Image
            style={styles.stopIcon}
            source={require('../../assets/deliveryPlace.png')}
          />
          <Text style={styles.nextStopText}>
            {`${currentStop.address}  ${toCurrentStop.endAddress
              ? `-- ${toCurrentStop.endAddress}`
              : ''}`}
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
  const currentStop = state.delivery.currentStop
  const toCurrentStop = state.delivery.toCurrentStop
  const visitedStop = state.delivery.visitedStop
  return {
    currentLocation,
    router,
    currentStop,
    visitedStop,
    toCurrentStop,
  }
}

Dashboard.propTypes = {
  currentLocation: React.PropTypes.object,
  router: React.PropTypes.array,
  visitedStop: React.PropTypes.array,
  currentStop: React.PropTypes.object,
  toCurrentStop: React.PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
