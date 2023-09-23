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
    <form onSubmit={sumbitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2023-01-01"
            step="2024-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить Расход</button>
          <button type="submit">Отмена</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
