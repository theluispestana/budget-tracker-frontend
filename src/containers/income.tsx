import React, { useState } from "react";
import { getIncomes, postIncome } from "../helpers/requests";
import InfoCard from "../components/infoCard";
import BudgetForm from "../components/budgetForm";

function Income() {
  const [incomeArr, setIncomeArr] = useState<any[]>([]);
  const [formFields, setFormFields] = useState<any>({
    source: "",
    amount: 0,
    frequency: 0,
  });

  React.useEffect(() => {
    getIncomes(localStorage.getItem("id") || "{}").then((docs) => {
      setIncomeArr(docs);
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
    postIncome({
      source: formFields.source,
      amount: formFields.amount,
      frequency: formFields.frequency,
      owner: JSON.parse(localStorage.getItem("user") || "{}"),
    }).then((doc) => {
      console.log("showing income that will be added to incomeArr", doc);
      setIncomeArr([...incomeArr, doc.createdIncome]);
    });
  };

  return (
    <div id="income-container">
      <h1>Incomes</h1>
      {incomeArr &&
        incomeArr.map((document) => {
          return (
            <InfoCard
              key={document._id}
              source={document.source}
              amount={document.amount}
              frequency={document.frequency}
            />
          );
        })}
      <BudgetForm
        source={formFields.source}
        amount={formFields.amount}
        frequency={formFields.frequency}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Income;
