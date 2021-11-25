import { combineReducers } from 'redux'
import logIn from './login'
import getWeather from './dashboard'

export default combineReducers({
    logIn,
    getWeather,
  })