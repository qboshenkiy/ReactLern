import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     name: event.target.value
    //   })
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         name: event.target.value
    //     }
    // })
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         amount: event.target.value
    //   })
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         amount: event.target.value
    //     }
    // })
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         date: event.target.value
    //   })
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         date: event.target.value
    //     }
    // })F
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputAmount("");
    setInputDate("");
    setInputName("");
  };

  return (
    
  );
};
export default CostForm;
