import React, { useState, useEffect } from "react";
import "./App.css";
import Credits from "./credits"

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

  const handleAddCredit = (e) => {
    e.preventDefault();
    setCredits([
      ...credits,
      {
        id : Math.random(),
        from: from,
        to: to,
        amount: amount,
      },
    ]);
    setFrom('');
    setTo('');
    setAmount('');
  };

  const deleteCredit = (id) => {
  const newCredits = credits.filter(todo => 
    {
    return todo.id !== id
  });
  setCredits(newCredits);
  }


  return (
    <div>
      <div className="container">
        <Credits credits = {credits} deleteCredit = {deleteCredit}/>
      <div className="row">
        <div className="col l3"></div>
        <div className="input-field col l2">
          <input id = "lender" value={from} onChange={OnChangeFrom} type="text" class="validate"></input>
          <label for="lender">Lender</label>
        </div>
        <div className="input-field col l2">
          <input id = "borrower" value={to} onChange={OnChangeTo} type="text" class="validate"></input>
          <label for="borrower">Borrower</label>
        </div>
        <div className="input-field col l2">
          <input id = "amount" value={amount} onChange={OnChangeAmount} type="text" class="validate"></input>
          <label for="amount">Amount</label>
        </div>
      </div>
      <div className ="row">
        <div className ="col l4"></div>
      <button type="button" onClick={handleAddCredit} className="btn btn-success center waves-effect waves-light center" id="addCredit">
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
