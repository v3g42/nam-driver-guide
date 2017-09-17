import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabTitleNormal: {
    marginBottom: 2,
    fontSize: 12,
    color: '$bottomTabInactiveColor',
  },
  tabTitleSelected: {
    color: '$bottomTabActiveColor',
    fontSize: 13,
  },
})

export default styles
