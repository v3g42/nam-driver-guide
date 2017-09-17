import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  btnContainer: {
    width: '2*$circelButtonRadius',
    height: '2*$circelButtonRadius',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$circelButtonRadius',
  },
  btnText: {
    color: 'white',
    fontWeight: 'normal',
  },
  btnDefaultIcon: {
    fontSize: '1.5*$circelButtonRadius',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 3,
  },
})

export default styles
