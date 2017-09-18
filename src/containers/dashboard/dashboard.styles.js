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
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    flexDirection: 'row',
    bottom: 10,
    width: '80%',
    left: '10%',
  },
  stopIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
})

export default styles
