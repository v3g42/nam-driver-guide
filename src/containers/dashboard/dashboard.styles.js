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
  nextStop: {
    zIndex: 501,
    shadowOpacity: 0.5,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
    bottom: 10,
    width: '90%',
    left: '5%',
  },
  nextStopText: {
    maxWidth: '80%',
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
    bottom: 90,
    right: 20,
  },
  currentPosButtonIcon: {
    backgroundColor: 'transparent',
  },
  textDoneList: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
  visitedDoneRow: {
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  visitedDoneRowText: {
    marginLeft: 15,
  },
  hiddenVisitedDoneList: {
    width: '90%',
    maxHeight: '60%',
    left: '5%',
    shadowOpacity: 0.5,
    bottom: 85,
    position: 'absolute',
  },
})

export default styles
