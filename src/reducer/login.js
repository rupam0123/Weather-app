import { RECEIVE_USER, LOGIN_PAGE, SET_DATA,SET_WEATHER,SET_CITY } from "../actions";

const initialState = {
  show: false,
  records: [],
  data: {
    userName: "",
    password: "",
  }
}

export default function logIn(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PAGE:
      return {
        ...state,
        show: action.payload
      };
    case RECEIVE_USER:
      return {
        ...state,
        records: action.user
      }

    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}