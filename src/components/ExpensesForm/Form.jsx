import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [title, setTitle] = useState("Title");
  const [amount, setAmount] = useState("Amount");
  const [date, setDate] = useState("Date");
  const titleHandler = (event) => {
    setTitle(event.target.value);
    console.log(event);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    console.log(event);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    console.log(event);
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">{title}</label>
          <input type="text" onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">{amount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">{date}</label>
          <input
            type="date"
            min="2019-01-29"
            max="2023-03-23"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default Form;
