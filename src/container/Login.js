import React from 'react'
import { Modal, Button,} from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux';
import { logIn, setLogin} from '../actions';
import { useNavigate } from 'react-router';



export default function Login() {
  const data = useSelector((state) => state.logIn.data)
  const showModal = useSelector((state) => state.logIn)
  const dispatch=useDispatch();

  const navigate =useNavigate();

  
    
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
      console.log(username);
      if(username===data.userName && password===data.password){
          return(
              navigate("/Dashboard")
              )
          }
        else(
            handleClose()
        )

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