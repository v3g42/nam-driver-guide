import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'
import colors from './colors.config'

const IPHONE_6 = 375
const IPHONE_6P = 414
const IPAD_4 = 768
const getRemBase = () => {
  const { width } = Dimensions.get('window')
  switch (true) {
    case width < IPHONE_6:
      return 16
    case width >= IPHONE_6 && width < IPHONE_6P:
      return 18
    case width >= IPHONE_6P && width < IPAD_4:
      return 20
    default:
      return 33
  }
}

const globalStyles = {
  rem: getRemBase(),
  mainColor: colors.mainColor,
  bottomTabActiveColor: colors.bottomTabActiveColor,
  bottomTabInactiveColor: colors.bottomTabInactiveColor,
}

EStyleSheet.build(globalStyles)
