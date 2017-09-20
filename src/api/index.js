import people from '../mock/name.json'
import news from '../mock/news.json'

export function fetchData() {
  return {
    news,
    people,
  }
}

export async function fetchDirection({ startLoc, destinationLoc }) {
  const resp = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyDXCnTG-2TgOr_9IHD9GUxn15KJxZjJ4gI&origin=${startLoc}&destination=${destinationLoc}`
  )
  const respJson = await resp.json()
  return respJson
}
