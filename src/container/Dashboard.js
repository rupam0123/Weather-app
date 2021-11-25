import {Button} from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { requestWeather } from '../thunks/getApi'
import { useSelector } from 'react-redux'
import { setCity } from '../actions'

 export default function Dashboard(){
     const weather = useSelector(state => state.getWeather.city)
     const api = useSelector(state => state.getWeather.api)
     const apiKeys = Object.keys(api)
     const apiValue = apiKeys.map(function(key){
         return{[key]: api[key]};
          })
          console.log('i am new array::',apiValue)
     const dispatch =  useDispatch()

      

     const handleSubmit = (event) =>{
         event.preventDefault();
         console.log(weather)
         dispatch(requestWeather(weather))


     }
     


     return(
         <>
         <input placeholder="enter city name" type ="text" name="city" onChange={(e)=>dispatch(setCity(e.target.value))}/>
         <Button type="submit" onClick={handleSubmit}>Search</Button>
         {apiValue.map(each=>(
             <>
              <div className="text-center">
                city:{each[0].name}<br/>
                Temprature:{each[0].main.temp}<br/>
                pressure:{each[0].main.pressure}
             
                {}
              </div>
             </>
         ))}
         </>
     )

 } 