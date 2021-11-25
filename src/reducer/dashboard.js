import { SET_WEATHER,SET_CITY } from "../actions";

const initialState = {
  api:[],
  city:'',
}

export default function getWeather(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        api: action.payload
      }
      case SET_CITY:
      return {
        ...state,
        city: action.city
      }

    default:
      return state
  }
}