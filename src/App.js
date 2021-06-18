
import React,{useState} from 'react'
import './App.css';
import Nav from './components/Nav';
import SignUpModal from './components/SignupModule';
import LoginModule from './components/LoginModule'

function App() {
  const[show,setShow] = useState(false)
  return (
    <div>
    <Nav>
    </Nav>

    </div>
  
  );
}

export default App;
