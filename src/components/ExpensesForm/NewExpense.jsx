import React from "react";
import "./Expense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.addExpenseData(expenseData);
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSavedData={ saveExpenseData} />
    </div>
  );
}

export default NewExpense;
