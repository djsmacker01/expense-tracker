import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpenseItem from "./components/Expenses/ExpenseItem";
// import ExpenseForm from "./components/ExpensesForm/ExpenseForm";
import NewExpense from "./components/ExpensesForm/NewExpense";

 const initial_expenses = [
   {
     id: "e1",
     title: "Toilet Paper",
     amount: 94.12,
     date: new Date(2020, 7, 14),
   },

   {
     id: "e2",
     title: "New TV",
     amount: 799.49,
     date: new Date(2021, 2, 12),
   },

   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
   },

   {
     id: "e4",
     title: "New Desk (Wooden)",
     amount: 450,
     date: new Date(2021, 5, 12),
   },
 ];


function App() {

  const [expenses, setExpenses] = useState(initial_expenses);
 
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  //   console.log("App.js");
  //   console.log(expense);
  // };
  const [filter, setFilter] = useState("2020");
  // const [filterDate, setFilterDate] = useState("2019,2021 & 2022");
  let filterInfo = "2019,2021 & 2022";

  if (filter === "2019") {
    filterInfo = "2020,2021 & 2022";
  } else if (filter === "2021") {
    filterInfo = "2019,2020 & 2022";
  }
  else if (filter === "2020") { 
    filterInfo = "2019,2021 & 2022";

  }
  else {
    filterInfo = "2019,2020 & 2021";
  }

  const getExpenseHandler = (selectedYear) => {
    console.log("App.js");
    setFilter(selectedYear);
  };

  return (
    <>
      <div className="expenses">
        {/* <ExpenseForm/> */}
        <NewExpense addExpenseData={addExpenseHandler} />
        <div>
          <ExpenseFilter filter={filter} onChangeFilter={getExpenseHandler} />
        </div>
        <p>Date for years {filterInfo} is hidden</p>
        {expenses.map((expense) => <ExpenseItem title={ expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)}
        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />

        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        /> */}
      </div>
    </>
  );
}

export default App
