import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  btnContainer: {
    width: '$buttonWidth',
    height: '$buttonHeight',
    backgroundColor: '$owBalancePanelBlue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$borderRadiusSm',
  },
  btnText: {
    color: 'white',
    fontWeight: 'normal',
  },
})

export default styles
