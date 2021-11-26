import user from '../api/user'

export const LOGIN_PAGE = 'LOGIN_PAGE'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_DATA ='SET_DATA'
export const SET_WEATHER = 'SET_WEATHER'
export const SET_CITY ='SET_CITY'
export const SET_CITYNAME ='SET_CITYNAME'
export const SET_WEATHERTYPE ='SET_WEATHERTYPE'
export const SET_WIND ='SET_WIND'


  const receiveUser= (user) =>{
    return{
      type:RECEIVE_USER,
      user
    }
  }
  export const logIn =(payload)=>(dispatch)=> {
    dispatch({
    type:LOGIN_PAGE,
    payload
    }
    )
  }  

export const getAllUser=()=>(dispatch)=>{
    user.getUser(user=>{
      dispatch(receiveUser(user))
    })
  }
  export const setLogin =(payload)=>{
    return{
    type:SET_DATA,
    payload
    }
  }
  export const setCity = (city)=>{
    return{
      type:SET_CITY,
      city
    }
  }

  export const setWeatherApi = (payload)=>{
    return{
      type:SET_WEATHER,
      payload
    }
  }
  export const setCityName = (payload) =>{
    return{
      type:SET_CITYNAME,
      payload
    }
  }
  export const setWeather = (payload) =>{
    return{
      type:SET_WEATHERTYPE,
      payload
    }
  }
  export const setWind = (payload) =>{
    return{
      type:SET_WIND,
      payload
    }
  }

