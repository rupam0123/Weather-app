import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from "./Login";
import History from './History';


function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/history" element= {<History/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
