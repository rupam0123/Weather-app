import axios from 'axios';
import { setWeatherApi } from '../actions';



export const requestWeather =(city) =>{
  return async (dispatch) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=152839cd736e90a49c27323b0958bdd1`);
    console.log('api',response.data)
 dispatch(setWeatherApi([response.data]))
    } 
}