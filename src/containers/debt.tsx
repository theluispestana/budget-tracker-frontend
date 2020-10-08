import React, { useState } from "react";
import InfoCard from "../components/infoCard";
import { getDebts } from "../helpers/requests";
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
    console.log(formFields);
    setFormFields({
      ...formFields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("submitting form");
  };

  return (
    <div id="debt-container">
      {console.log("showing all docs", debtArr)}
      <h1>debt component mounted</h1>
      {debtArr &&
        debtArr.map((document) => (
          <InfoCard
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
