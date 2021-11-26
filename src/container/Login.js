import React from 'react'
import { Modal, Button,} from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux';
import { getAllUser, logIn, setLogin} from '../actions';
import { useNavigate } from 'react-router';
import { useEffect ,useState} from 'react';
import { requestWeather } from '../thunks/getApi';



export default function Login() {
  const data = useSelector((state) => state.logIn.data)
  const showModal = useSelector((state) => state.logIn)
  const dispatch=useDispatch();
  const navigate =useNavigate();
  const [location ,setLocation] =useState({
    loaded:false,
    coordinates: {lat:"",lng :""},
  })
  const city = showModal.records.map((item)=>(
    item.cityName
    
  ))
  const onSuccess =(event)=>{
    setLocation({
      loaded:true,
      coordinates:{
        lat:event.coords.latitude,
        lng:event.coords.longitute

      }
    })
  }
const onError =() =>{
  alert("allow not performed")
  dispatch(requestWeather(city))


}

  const getGeoLocation = () =>{
    if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition((event)=>onSuccess(event),onError)
    }
    else{
      console.log("alert not performed")
    }
  }

  useEffect(() => {
    dispatch(getAllUser())  
    }, [])
    
  const handleChange = (event) =>{
    dispatch(setLogin({...data,[event.target.name] : event.target.value}))
     }
  

  const handleClose = () =>{
    dispatch(logIn(false));
  }

  const handleShow=()=> {
    dispatch(logIn(true))
    
  }

  const loggedIn=(username,password) =>{
      if(username===data.userName && password===data.password){
        getGeoLocation();
          return(
             navigate("/Dashboard")
          )
          
        }
        else{
          alert("incorrect username or password");
          
            
        }

      }

  return (
    <>
    <div className="text-center">
      <Button variant="danger" onClick={handleShow}>
        Login
      </Button>
      </div>

      <Modal show={showModal.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="UserName" name="userName" autoComplete="off" 
          onChange={handleChange}/>
          <input type="password" placeholder="password" name="password"
          onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showModal.records.map((data)=>(
              <>
              <Button variant="primary" onClick={()=>loggedIn(data.username,data.password)}>
              Log-in
            </Button>
            </>
            ))}
          

        </Modal.Footer>
      </Modal>
    </>
  );
}