import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [title, setTitle] = useState("Title");
  const [amount, setAmount] = useState("Amount");
  const [date, setDate] = useState("Date");

  const [counter, setCounter] = useState(0);

  const buttonHandler = () => {
   const value = setCounter(counter + 1);
    console.log(value)
  };

  const decrementHandler = () => {
    setCounter(prevCounter=>prevCounter - 1)
 
  };

  // Dealing with single state changes
  // const [userInput, setUserInput] = useState({
  //   setTitle: '',
  //   setAmount: '',
  //   setDate: '',
  // })
  const titleHandler = (event) => {

    // setUserInput((prevState)=> {
    // return{...prevState,setTitle: event.target.value}
    // })
    setTitle(event.target.value);
    console.log(event);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    console.log(event);
    //  setUserInput((prevState) => {
    //    return { ...prevState, setAmount: event.target.value };
    //  });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    console.log(event);
    //  setUserInput((prevState) => {
    //    return { ...prevState, setDate: event.target.value };
    //  });
  };

  return (
    <>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleHandler} />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
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
     
    </>
  );
}

export default Form;
