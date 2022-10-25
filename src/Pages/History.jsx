import React, { useState } from "react";

export default function History() {
  const [his, setHis] = useState([
    { diagnosis: "Cold", symptoms: ["cold", "cough"] },
    { diagnosis: "Cough", symptoms: ["cold", "cough"] },
  ]);
  return (
    <main>
      <h2>Diagnostic History</h2>
      <table border="1">
        <tr>
          <th>S No.</th>
          <th>Diagnosis</th>
          <th>Symptoms</th>
        </tr>
        {his.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.diagnosis}</td>
              <td>
                {item.symptoms.map((sym) => {
                  return <li>{sym}</li>;
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
