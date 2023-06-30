import React from "react";
import "./Expense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense() {

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSavedData={ saveExpenseData} />
    </div>
  );
}

export default NewExpense;
