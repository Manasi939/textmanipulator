
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [mode,cmode]=useState("light")
const toggle=()=>{
  if(mode==="light"){
    cmode("dark")
    document.body.style.color="white"
    document.body.style.backgroundColor="black"
  }
  else if(mode==="dark"){
    cmode("light")
    document.body.style.color="black"
    document.body.style.backgroundColor="white"
  }

}
const [alert,setalert]=useState(null)
const sett=(msg,type)=>{
     setalert({
      msg:msg, type:type
     })
   setTimeout(()=>{
    setalert(null)
   },3000)
}
  return (
   
    <Router>
     <Navbar title="mODDOC" mode={mode} toggle={toggle}     />
     <Alert setalert={sett} sett={alert}/>
    <div className="App">
    <Routes>
         <Route exact path="/home" element={ <Home  setalert={sett} />}/>
         
           <Route exact path="/about"  element={ <About  mode={mode} />} />
    
          
    </Routes>
  
    </div>
   
    </Router>
  );
}

export default App;
