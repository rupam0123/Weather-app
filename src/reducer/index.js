import { combineReducers } from 'redux'
import logIn from './login'
import getWeather from './dashboard'
import getHistory from './history'

export default combineReducers({
    logIn,
    getWeather,
    getHistory,
  })