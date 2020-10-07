import React, { useState } from "react";
import { getIncomes } from "../helpers/requests";

function Income() {
  const [incomeArr, setIncomeArr] = useState([]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    getIncomes(user).then(console.log);
  });

  return (
    <div>
      <h1>income component mounted</h1>
    </div>
  );
}

export default Income;
