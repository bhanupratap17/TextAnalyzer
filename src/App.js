import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#210240";
       showAlert("Dark mode has been enabled : " ,"success");
      document.title = 'TextUtility - Dark Mode';
    }
    else{
      setMode("light");
         document.body.style.backgroundColor = "white";
         showAlert("Light mode has been enabled : " ,"success");
           document.title = 'TextUtility - Light Mode';
    }
  }
  
  return (
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>     
   <footer className={`text-${mode === 'light'? "dark": "light"}`}>Made by ❤️Bhanu</footer>   
    </Router>
  );
}

export default App;
