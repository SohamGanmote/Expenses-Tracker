import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [returnValue, setReturnValue] = useState(0);

  function showForm() {
    setReturnValue(1);
  }

  function hideForm() {
    setReturnValue(0);
  }

  return (
    <div className="new-expense">
      {returnValue === 0 ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          tohideForm={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
