import React from 'react'
import './ExpenseItem.css'
function ExpenseItem() {

    return (
      <>
        <div className="expense-item">
          <div>June 18, 2023</div>
          <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">£300</div>
          </div>
        </div>
      </>
    );
}

export default ExpenseItem