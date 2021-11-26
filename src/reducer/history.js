import { SET_CITYNAME,SET_WEATHERTYPE,SET_WIND } from "../actions";

const initialState = {
    cityName:[],
    weather:'',
    wind:''

}
export default function getHistory(state = initialState, action) {
    switch (action.type) {
      case SET_CITYNAME:
        return {
          ...state,
          cityName: action.payload
        }
        case SET_WEATHERTYPE:
        return {
          ...state,
          weather: action.payload
        }
        case SET_WIND:
            return{
                ...state,
                wind:action.payload
            }
      default:
        return state
    }
  }
