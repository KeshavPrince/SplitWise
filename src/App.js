import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [credits, setCredits] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState('');
  const OnChangeFrom = (e) => {
    setFrom(e.target.value);
  };
  const OnChangeTo = (e) => {
    setTo(e.target.value);
  };
  const OnChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAddCredit = () => {
    setCredits([
      ...credits,
      {
        from: from,
        to: to,
        amount: amount,
      },
    ]);
  };

  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col l3"></div>
        <div className="input-field col l2">
          <input id = "crediter" value={from} onChange={OnChangeFrom} type="text" class="validate"></input>
          <label for="crediter">Crediter</label>
        </div>
        <div className="input-field col l2">
          <input id = "debiter" value={to} onChange={OnChangeTo} type="text" class="validate"></input>
          <label for="debiter">Debiter</label>
        </div>
        <div className="input-field col l2">
          <input id = "amount" value={amount} onChange={OnChangeAmount} type="text" class="validate"></input>
          <label for="amount">Amount</label>
        </div>
      </div>
      <div className ="row">
        <div className ="col l4"></div>
      <button type="button" className=" btn btn-success center waves-effect waves-light center" id="addCredit">
        Add
      </button>
      <div className ="col l2"></div>
      </div>
      </div>
      <div id="container">
        <div id="unsolvedNetwork"></div>
        <div id="container2">
          <span id="temptext">Result will be displayed here </span>
          <div id="solvedNetwork"></div>
        </div>
      </div>
      <button type="button" className="btn green center" id="solve">
        Solve
      </button>
    </div>
  );
}

export default App;
