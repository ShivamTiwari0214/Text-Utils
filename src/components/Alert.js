import React from "react";

function Alert(props) {
    const capatlize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
      <div className={`alert alert-${props.messageType} alert-dismissible fade show`} role="alert" style={
        {
            position:'absolute',
            width:'100vw',
            display:props.alertStatus,
            zIndex:1
      }}>
        <strong>{capatlize(props.messageType)}:</strong> {props.alertMessage}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
  
  );
}

export default Alert;
