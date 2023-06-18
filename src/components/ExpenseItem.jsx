import React from 'react'
import './ExpenseItem.css'
function ExpenseItem(props) {
    const {title,amount,date} = props
    // const expenseDate = new Date(2023, 5, 18);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 300

    return (
      <>
        <div className="expense-item">
                <div>{date.toDateString() }</div>
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">£{amount}</div>
          </div>
        </div>
      </>
    );
}

export default ExpenseItem