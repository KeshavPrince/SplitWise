import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [credits, setCredits] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState('');
  const OnChangeFrom = (e) => {
    setFrom(e.target.value);
  };
  const OnChangeTo = (e) => {
    setTo(e.target.value);
  };
  const OnChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleAddCredit = () => {
    setCredits([
      ...credits,
      {
        from: from,
        to: to,
        value: value,
      },
    ]);
  };

  return (
    <div>
      <div className="row">
        <div className="col l3"></div>
        <div className="col l2">
          <input value={from} onChange={OnChangeFrom}></input>
        </div>
        <div className="col l2">
          <input value={to} onChange={OnChangeTo}></input>
        </div>
        <div className="col l2">
          <input value={value} onChange={OnChangeValue}></input>
        </div>
      </div>
      <div id="container">
        <div id="unsolvedNetwork"></div>
        <div id="container2">
          <span id="temptext">Result will be displayed here </span>
          <div id="solvedNetwork"></div>
        </div>
      </div>
      <button type="button" className="btn btn-success center" id="solve">
        Solve
      </button>
    </div>
  );
}

export default App;
