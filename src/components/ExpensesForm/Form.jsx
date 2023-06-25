import React from "react";
import "../ExpensesForm/Form.css";
function Form() {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
}

export default Form;
