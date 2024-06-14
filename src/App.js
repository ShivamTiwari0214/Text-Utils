import "./App.css";
import Nav from "./components/Nav";
import TextInput from "./components/TextInput";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [textInputTheme, setTextInputTheme] = useState({
    backgroundColor: "#94a0b2",
    color: "black",
  });
  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = `${!darkMode ? `white` : `#94a0b2`}`;

    !darkMode === true
      ? setTextInputTheme({
          backgroundColor: "#94a0b2",
          color: "white",
        })
      : setTextInputTheme({
          backgroundColor: "#fff",
          color: "black",
        });
  };

  const [alertStatus, setAlertStatus] = useState("none");

  const alertStatusHandler = () => {
    setAlertStatus("block");
    setTimeout(() => setAlertStatus("none"), 1000);
  };
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageType, setAlertMessageType] = useState("");

  const alertMessageHandler = (alertMessage) => {
    setAlertMessage(alertMessage);
  };
  return (
    <> 
    <Router> 
      
      <Nav
        title="TextUtils"
        aboutText="About"
        mode={darkMode}
        toggleMode={toggleMode}
        alertStatusHandler={alertStatusHandler}
        setAlertMessageType={setAlertMessageType}
        setAlertMessage={setAlertMessage}
        alertMessageHandler={alertMessageHandler}
      ></Nav>
      <Alert
        alertStatus={alertStatus}
        alertMessage={alertMessage}
        messageType={alertMessageType}
      ></Alert>
       <Routes> 
           <Route exact path="/" element={ 
            <TextInput
              heading="Enter text to analyze"
              theme={textInputTheme}
              alertStatusHandler={alertStatusHandler}
              alertMessageHandler={alertMessageHandler}
              setAlertMessageType={setAlertMessageType}
            />
            } /> 
           <Route exact path="/About" element={ 
            <About/> 
           }></Route> 
         </Routes> 

      </Router> 
    </>
  );
}

export default App;
