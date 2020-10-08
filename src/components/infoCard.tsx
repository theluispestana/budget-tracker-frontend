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
    <div className="info-card">
      {/* <h1>mounted infoCard</h1> */}
      {name && (
        <h3>
          Name : <span>{name}</span>
        </h3>
      )}
      {source && (
        <h3>
          Source: <span>{source}</span>
        </h3>
      )}
      {amount && (
        <h3>
          Amount: <span>{amount}</span>
        </h3>
      )}
      {frequency && (
        <h3>
          Frequency: <span>{frequency}</span>
        </h3>
      )}
      {interest && (
        <h3>
          Interest: <span>{interest}</span>
        </h3>
      )}
    </div>
  );
}

export default InfoCard;
