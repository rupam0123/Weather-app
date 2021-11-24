import user from '../api/user'

export const LOGIN_PAGE = 'LOGIN_PAGE'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_DATA ='SET_DATA'

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

