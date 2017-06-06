import { combineReducers } from 'redux'
import query  from './query'
import news  from './news'

const hnApp = combineReducers({
  query,
  news
})

export default hnApp
