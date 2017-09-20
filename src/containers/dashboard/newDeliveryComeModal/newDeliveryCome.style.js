import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.5,
  },
  message: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: -20,
    marginBottom: 20,
    fontSize: '1.3rem',
  },
  closeButton: {
    padding: 8,
    marginBottom: 20,
  },
  animatableView: {
    backgroundColor: 'transparent',
  },
})

export default styles
