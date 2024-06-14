import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav(props) {
    
 const [headingColor , setHeadingColor]=useState('#f5f9ff')
 const [textColor , setTextColor] = useState('black')
 
 const modeChangeHandler = () =>{
  props.setAlertMessageType("success")
  props.setAlertMessage("Mode Switch")
  props.alertStatusHandler();
  props.toggleMode()
  props.mode?setHeadingColor('#212529'):setHeadingColor('#f5f9ff ')
  props.mode?setTextColor('white'):setTextColor('black')
 }
 
  const mode = {
    backgroundColor :headingColor
  }
  const textMode ={
    color : textColor
  }
  
  return (
    <nav className='navbar navbar-expand-lg ' style={mode}>
      <div className="container-fluid " >
        <Link  className="navbar-brand" to="/" style={textMode}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={textMode} className="nav-link default" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={textMode} className="nav-link" to="/About" >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="form-check form-switch py-3 w-25 ">
        <input
          className="form-check-input primary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={ modeChangeHandler }
        />
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" style={textMode} >
          Dark Mode
        </label>
      </div>
     
    </nav>
  );
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Nav.defaultPros = {
//   title: "TextUtils",
//   aboutText: "About",
// };
