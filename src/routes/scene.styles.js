import { Navigator } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export const navBarHeight = Navigator.NavigationBar.Styles.General.NavBarHeight
export const totalNavHeight =
  Navigator.NavigationBar.Styles.General.TotalNavHeight
export const statusBarHeight =
  Navigator.NavigationBar.Styles.General.StatusBarHeight

const styles = EStyleSheet.create({
  navbarPadding: {
    paddingTop: totalNavHeight,
  },
})

export default styles
