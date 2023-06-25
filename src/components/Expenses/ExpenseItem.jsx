import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem({ title, amount, date }) {
  const [titles, setTitle] = useState(title) 

  const titleHandler = () => {
    setTitle('update');
  }

  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{titles}</h2>
          <div className="expense-item__price">£{amount}</div>
        </div>
        <button onClick={titleHandler}> click me</button>
      </div>
    </>
  );
}

export default ExpenseItem;
