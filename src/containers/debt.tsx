import React, { useState } from "react";
import InfoCard from "../components/infoCard";
import { getDebts, postDebt } from "../helpers/requests";
import BudgetForm from "../components/budgetForm";

function Debt() {
  const [debtArr, setDebtArr] = useState<any[]>([]);
  const [formFields, setFormFields] = useState<any>({
    name: "",
    amount: 0,
    interest: 0,
  });

  React.useEffect(() => {
    getDebts(localStorage.getItem("id") || "{}").then((docs) => {
      setDebtArr(docs);
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
    postDebt({
      name: formFields.name,
      amount: formFields.amount,
      interest: formFields.interest,
      owner: JSON.parse(localStorage.getItem("user") || "{}"),
    }).then((doc) => setDebtArr([...debtArr, doc.createdDebt]));
  };

  return (
    <div id="debt-container">
      <h1>Debts</h1>
      {debtArr &&
        debtArr.map((document) => (
          <InfoCard
            key={document._id}
            name={document.name}
            amount={document.amount}
            interest={document.interest}
          />
        ))}
      <BudgetForm
        name={formFields.name}
        amount={formFields.amount}
        interest={formFields.interest}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Debt;
