import "./Modal.css";
import ReactDOM from "react-dom";
import React from "react";

const Modal = (props) => {
  const BackDrop = () => {
    return (
      <div
        className="backdrop-filter"
        onClick={() => props.onClick(false)}
      ></div>
    );
  };
  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
    </div>
  );
};

export default Modal;
