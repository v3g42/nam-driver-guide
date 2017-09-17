import people from '../mock/name.json'
import news from '../mock/news.json'

export function fetchData() {
  return {
    news,
    people,
  }
}
