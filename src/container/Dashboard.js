import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { requestWeather } from '../thunks/getApi'
import { useSelector } from 'react-redux'
import { setCity } from '../actions'
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const city = useSelector(state => state.getWeather.city)
  const api = useSelector(state => state.getWeather.api)
  const apiKeys = Object.keys(api)
  const apiValue = apiKeys.map(function (key) {
    return { [key]: api[key] };
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city)
    dispatch(requestWeather(city))
  }
  const handleShowHistory= ()=>{
    navigate("/History")
  }
  const arr1 = apiValue.map(each=>({city:each[0].name,weather:each[0].weather[0].description,wind:each[0].wind.speed}
    ))
    const history = JSON.parse(localStorage.getItem('arr1') || '[]')
    history.push(arr1);
    localStorage.setItem('history', JSON.stringify(history))
    console.log("arr1",history)


  return (
    <>
    <div className= "text-center mt-5">
      <input placeholder="enter city name" type="text" name="city" onChange={(e) => dispatch(setCity(e.target.value))} /><br/> <br/>
      <Button  onClick={handleSubmit}>Search</Button><br/> <br/>
      {apiValue.map(each => (
        <>
          <div className="text-center">
            city:{each[0].name}<br />
            weather:{each[0].weather[0].description}<br />
            WindSpeed:{each[0].wind.speed}
            {/* {
            localStorage.setItem("city",each[0].name),
            localStorage.setItem("Weather",each[0].weather[0].description),
            localStorage.setItem("wind",each[0].wind.speed)
            } */}
          </div>
        </>
      ))}
      <Button variant="secondary" type="submit" onClick={handleShowHistory}>History</Button><br/><br/>
      </div>
    </>
  )

}