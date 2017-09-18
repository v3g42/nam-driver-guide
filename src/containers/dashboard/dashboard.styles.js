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
  },
  nextStop: {
    shadowOpacity: 0.5,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
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
    shadowOpacity: 0.5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 80,
    right: 20,
  },
  currentPosButtonIcon: {
    backgroundColor: 'transparent',
  },

  visitedDoneRow: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  visitedDoneRowText: {
    marginLeft: 10,
  },
  hiddenVisitedDoneList: {
    marginBottom: 80,
  },
})

export default styles
