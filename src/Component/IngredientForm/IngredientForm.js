import "./IngredientForm.css";
import React, { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";

// const inputReducer = (state, action) => {
//   if (action.type === "NameInput") {
//     return {
//       name: action.val,
//       amount: state.amount,
//     };
//   }
//   if (action.type === "AmountInput") {
//     return {
//       name: state.name,
//       amount: action.val,
//     };
//   }
//   return {
//     name: "",
//     amount: "",
//   };
// };

const IngredientForm = () => {
  // const [Name, setName] = useState("");
  // const [number, setNumber] = useState("");
  const nameRef = useRef();
  const amountRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  // const [userInputs, dispatchUserInputs] = useReducer(inputReducer, {
  //   name: "",
  //   amount: "",
  // });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsModal(() => !isModal);

    dispatch({
      type: "addIngredient",
      value: {
        name: nameRef.current.value,
        amount: amountRef.current.value,
      },
    });
  };

  // const nameOnChangeHandler = () => {
  //   dispatchUserInputs({ type: "NameInput", val: nameRef.current.value });
  // };

  // const numberOnChangeHandler = () => {
  //   dispatchUserInputs({ type: "AmountInput", val: amountRef.current.value });
  // };

  return (
    <div>
      {isModal && <Modal onClick={setIsModal} />}
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            ref={nameRef}
            type="text"
            // onChange={nameOnChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount</label>
          <input
            className="form-control"
            ref={amountRef}
            type="number"
            // onChange={numberOnChangeHandler}
          />
        </div>
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
};

export default IngredientForm;
