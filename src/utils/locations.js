const deg2rad = deg => {
  return deg * (Math.PI / 180)
}

export const getDistanceFromLatLonInMet = (
  { latitude, longitude },
  { targetLatitude, targetLongitude }
) => {
  const R = 6371
  const dLat = deg2rad(targetLatitude - latitude)
  const dLon = deg2rad(targetLongitude - longitude)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latitude)) *
      Math.cos(deg2rad(targetLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d * 1000
}
