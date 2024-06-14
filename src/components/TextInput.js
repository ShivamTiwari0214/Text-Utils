import PropTypes from "prop-types";
import React , {useState} from 'react' ;

export default function TextInput(props) {
    const [text , setText] = useState('');
    const [wordsCount , setWordCount] = useState(0);
    const [charCount , setCharCount] = useState(0);

    const onChangeHandler = (event) =>{
        setText(event.target.value);
        event.target.value===''?setWordCount(0):setWordCount(event.target.value.trim().split(/\s+/g).length);
        
        setCharCount(event.target.value.replace(/\s+/g, "").length)
        // console.log(event.target.value.trim().split(/\s+/g));
    }
    const toUpCase = () => {
      if(wordsCount===0){ 
        props.setAlertMessageType("warning")
        props.alertMessageHandler("INPUT REQUIRED")
        props.alertStatusHandler();
      }
        setText(text.toUpperCase())
    }
    const toLowCase = () => {
      if(wordsCount===0){ 
        props.setAlertMessageType("warning")
        props.alertMessageHandler("INPUT REQUIRED")
        props.alertStatusHandler();
      }
        setText(text.toLowerCase())
    }
    const clearText = () => {
      if(wordsCount===0){
        props.setAlertMessageType("warning")
        props.alertMessageHandler("Nothing to clear")
        props.alertStatusHandler();
      }

        setText('');
        setWordCount(0);
        setCharCount(0);
    }
    
  
  return (
    <div className="container my-3 ">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.heading}</h3>
        </label>
        <textarea
          style={props.theme}
          className="form-control dark"
          id="exampleFormControlTextarea1"
          rows="12"
          onChange={onChangeHandler}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUpCase} >Upper Case</button>
      <button className="btn btn-primary mx-3" onClick={toLowCase}>Lower Case</button>
      <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
      <div className="container my-3">
        <h3 >Your text summary</h3>
        <p>{wordsCount} words and {charCount} characters.</p>
        <p>Average time required to read above text : {wordsCount*0.0008} minutes</p>
        <h3>Preview</h3>
        <p>{text===''?"Enter something in the textbox above to preview it here...":text}</p>
      </div>
    </div>
  );
}

TextInput.propTypes = {
  heading: PropTypes.string.isRequired,
};

// TextInput.defaultProps = {
//   heading: "Enter Text TO analyze",
// };
