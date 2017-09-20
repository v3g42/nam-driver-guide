import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
  },
  spiner: {
    alignSelf: 'center',
  },
  mapView: {
    flex: 1,
    zIndex: 500,
  },
  statusBar: {
    zIndex: 501,
    shadowOpacity: 0.5,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'column',
    bottom: 10,
    width: '90%',
    left: '5%',
  },
  stopIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  currentPosButton: {
    zIndex: 501,
    shadowOpacity: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
    right: 20,
  },
  currentPosButtonIcon: {
    backgroundColor: 'transparent',
  },
  textDoneList: {
    fontSize: 19,
    alignSelf: 'center',
    marginTop: 10,
  },
  deliveryRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingVertical: 9,
    flexDirection: 'column',
  },
  locationItem: {
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationItemText: {
    marginLeft: 15,
    marginRight: 5,
  },
  hiddenVisitedDoneList: {
    width: '90%',
    maxHeight: '60%',
    left: '5%',
    shadowOpacity: 0.5,
    bottom: 95,
    position: 'absolute',
  },
})

export default styles
