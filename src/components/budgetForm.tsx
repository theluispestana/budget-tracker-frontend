import React from "react";

type budgetForm = {
  name?: string;
  source?: string;
  amount: number;
  frequency?: number;
  interest?: number;
  handleChange: Function;
  handleSubmit: Function;
};

function BudgetForm({
  name,
  source,
  amount,
  frequency,
  interest,
  handleChange,
  handleSubmit,
}: budgetForm) {
  return (
    <div>
      <form>
        {name === undefined || (
          <>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </>
        )}
        <br />
        {source === undefined || (
          <>
            <label>Source: </label>
            <input
              type="text"
              name="source"
              value={source}
              onChange={(e) => handleChange(e)}
              placeholder="Source"
            />
          </>
        )}
        <br />
        {amount === undefined || (
          <>
            <label>Amount: </label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => handleChange(e)}
              placeholder="Amount"
            />
          </>
        )}
        <br />
        {frequency === undefined || (
          <>
            <label>Frequency: </label>
            <input
              type="number"
              name="frequency"
              value={frequency}
              onChange={(e) => handleChange(e)}
              placeholder="Frequency"
            />
          </>
        )}
        <br />
        {interest === undefined || (
          <>
            <label>Interest: </label>
            <input
              type="number"
              name="number"
              value={interest}
              onChange={(e) => handleChange(e)}
              placeholder="Interest"
            />
          </>
        )}
        <br />
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </form>
    </div>
  );
}

export default BudgetForm;
