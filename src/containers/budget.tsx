import React from "react";
import Income from "./income";
import Expense from "./expense";
import Debt from "./debt";
import "../styles/budget.css";

function Budget() {
  return (
    <div id="budget-container">
      <Income />
      <Expense />
      <Debt />
    </div>
  );
}

export default Budget;
