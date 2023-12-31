import React, { useState } from "react";
import "./Form.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [counter, setCounter] = useState(0);

  // const buttonHandler = () => {

  //  const value = setCounter(counter + 1);
  //   console.log(value)
  // };

  // const decrementHandler = () => {
  //   setCounter(prevCounter=>prevCounter - 1)

  // };

  // Dealing with single state changes
  // const [userInput, setUserInput] = useState({
  //   setTitle: '',
  //   setAmount: '',
  //   setDate: '',
  // })
  // const titleHandler = (event) => {

  //   setUserInput((prevState)=> {
  //   return{...prevState,setTitle: event.target.value}
  //   })
  //   setTitle(event.target.value);
  //   console.log(event);
  // };

  // const amountHandler = (event) => {
  //   setAmount(event.target.value);
  //   console.log(event);
  //    setUserInput((prevState) => {
  //      return { ...prevState, setAmount: event.target.value };
  //    });
  // };

  // const dateHandler = (event) => {
  //   setDate(event.target.value);
  //   console.log(event);
  //    setUserInput((prevState) => {
  //      return { ...prevState, setDate: event.target.value };
  //    });
  // };
  // using single function

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    // console.log(expenseData)
    props.onSavedData(expenseData);
    setTitle(" ");
    setAmount(" ");
    setDate(" ");
  };
  

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
              value={title}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(event) =>
             inputChangeHandler("amount", event.target.value)
              }
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-29"
              max="2023-03-23"
              value={date}
              onChange={(event) =>
                inputChangeHandler("date", event.target.value)
              }
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
