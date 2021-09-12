import "./IngredientForm.css";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const IngredientForm = () => {
  const [Name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isModal, setIsModal] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsModal(() => !isModal);
  };

  return (
    <div>
      {isModal && <Modal onClick={setIsModal} />}
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount</label>
          <input
            className="form-control"
            type="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
};

export default IngredientForm;
