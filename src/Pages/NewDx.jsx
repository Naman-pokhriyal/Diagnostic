import React, { useState } from "react";
import "./newdx.css";

export default function NewDx() {
  const [symptoms, SetSymptoms] = useState(["cold", "cough"]);
  const [sList, setSList] = useState(["cold", "cough"]);
  const [dxList, setDxList] = useState(["cold", "cough"]);
  return (
    <main>
      <h2>New Diagnostic</h2>
      <form id="sym-Sel">
        <label htmlFor="symptom">Symptom</label>
        <select id="symptom" name="symptom">
          {symptoms.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <button type="submit">Select</button>
      </form>
      <div className="selection">
        <div className="dxList">
          <h3>Do you Have:</h3>
          <form>
            {dxList.map((item) => {
              return (
                <div>
                  <input type="radio" className="dxs" name="dx" value={item} />
                  <label>{item}</label>
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="symLists">
          <h3>Symptoms You Have:</h3>
          <ol className="symList">
            {sList.map((item) => {
              return <li className="syms">{item}</li>;
            })}
          </ol>
        </div>
      </div>
    </main>
  );
}
