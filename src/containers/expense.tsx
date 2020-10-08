import React, { useState } from "react";
import InfoCard from "../components/infoCard";
import { getExpenses, postExpense } from "../helpers/requests";
import BudgetForm from "../components/budgetForm";

function Expense() {
  const [expenseArr, setExpenseArr] = useState<any[]>([]);
  const [formFields, setFormFields] = useState<any>({
    name: "",
    amount: 0,
    frequency: 0,
  });

  React.useEffect(() => {
    getExpenses(localStorage.getItem("id") || "{}").then((docs) => {
      setExpenseArr(docs);
    });
  }, []);

  const handleChange = (e: any) => {
    setFormFields({
      ...formFields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    postExpense({
      name: formFields.name,
      amount: formFields.amount,
      frequency: formFields.frequency,
      owner: JSON.parse(localStorage.getItem("user") || "{}"),
    }).then((doc) => setExpenseArr([...expenseArr, doc.createdExpense]));
  };

  return (
    <div id="expense-container">
      {console.log("showing all docs", expenseArr)}
      <h1>Expenses</h1>
      {expenseArr &&
        expenseArr.map((document) => (
          <InfoCard
            name={document.name}
            amount={document.amount}
            frequency={document.frequency}
          />
        ))}
      <BudgetForm
        name={formFields.name}
        amount={formFields.amount}
        frequency={formFields.frequency}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Expense;
