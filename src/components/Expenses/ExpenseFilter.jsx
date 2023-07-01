import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter() {
  return (
    <div className="expenses-filter">
      <div className="expense-filter__control">
        <label htmlFor="">Filter by year</label>
        <select name="" id="">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter