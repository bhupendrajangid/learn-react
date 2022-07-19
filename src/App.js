import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [navFont,setNavFont]=useState('dark');
  const [alert,setAlert]=useState(null);

  const toggleMode=()=>{
    console.log(`Current mode -> ${mode}`)
    if(mode==='light') {
      setMode('dark')
      setNavFont('light')
      showAlert("Dark mode has been enabled -----","success");
      console.log(alert);
      
    }
    else {
      setNavFont('dark')
      setMode('light')}
      showAlert("Dark mode has been disabled XXXXXX","warning")
      console.log(alert);
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type})

      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  return (
    <>
    {/* <Router>
      <Navbar title="VTE" about="About us" mode={mode} navFont={navFont} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
        <div>
          <Routes>
              <Route exact path='/home' element={ <TextForm heading="Enter text to Analyze" showAlert={showAlert}></TextForm>} />
              <Route exact path='/' element={ <TextForm heading="Enter text to Analyze" showAlert={showAlert}></TextForm>} />
              <Route exact path='/about' element={ <About />} />
            </Routes>
        </div>
    </Router> */}

<Navbar title="VTE" about="About us" mode={mode} navFont={navFont} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
        <div>
             <TextForm heading="Enter text to Analyze" showAlert={showAlert}></TextForm>
        </div>

    </>
  )
}

export default App;
