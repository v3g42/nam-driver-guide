import React from 'react'
import { ActivityIndicator } from 'react-native'
import Button from 'react-native-button'
import styles from './button.styles'

const getLoadingSpinner = () => <ActivityIndicator color="white" />

/**
 * Custom button component with default styles
 * Disabled and shows spinner when isLoading is true
 */
function OwButton({ children, style, containerStyle, isLoading, ...props }) {
  return (
    <Button
      containerStyle={[styles.btnContainer, containerStyle]}
      style={[styles.btnText, style]}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? getLoadingSpinner() : children}
    </Button>
  )
}

OwButton.propTypes = {
  ...Button.propTypes,
}

export default OwButton
