import React from "react";

type document = {
  name?: string;
  source?: string;
  amount: number;
  frequency?: number;
  interest?: number;
};

function InfoCard({ name, source, amount, frequency, interest }: document) {
  return (
    <div>
      <h1>mounted infoCard</h1>
      {name && <h1>{name}</h1>}
      {source && <h1>{source}</h1>}
      {amount && <h1>{amount}</h1>}
      {frequency && <h1>{frequency}</h1>}
      {interest && <h1>{interest}</h1>}
    </div>
  );
}

export default InfoCard;
