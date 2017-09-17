/**
 * Helper to Save, Load, Delete data from local storage
 */
import { AsyncStorage } from 'react-native'

export const REFRESH_TOKEN = '@openwallet:refreshToken'

export async function saveRefreshToken(refreshToken) {
  return AsyncStorage.setItem(REFRESH_TOKEN, refreshToken)
}

export async function loadRefreshToken() {
  return AsyncStorage.getItem(REFRESH_TOKEN)
}

export async function removeRefreshToken() {
  return AsyncStorage.removeItem(REFRESH_TOKEN)
}
