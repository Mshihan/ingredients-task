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

  const ConfirmationMessage = () => {
    return (
      <div className="confirmation">
        <div className="confirmation-message">
          <h3 className="confirmation-message__title">Confirmation Message</h3>
          <p className="confirmaton-message__description">
            By Clicking "yes" this Ingredient will be added to the list
          </p>
          <button>Yes</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ConfirmationMessage onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Modal;
