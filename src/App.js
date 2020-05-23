import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import {genrateGraph} from './genrateGraph';
import Credits from "./credits";

function App() {
  const [credits, setCredits] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const unsolvedNetwork = useRef(null);
  const network = useRef(null);

  const OnChangeFrom = (e) => {
    setFrom(e.target.value);
  };
  const OnChangeTo = (e) => {
    setTo(e.target.value);
  };
  const OnChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    genrateGraph(credits, network, unsolvedNetwork);
  }, [credits]);

  const handleAddCredit = (e) => {
    e.preventDefault();
    setCredits([
      ...credits,
      {
        id: Math.random(),
        from: from,
        to: to,
        amount: amount,
      },
    ]);
    setFrom("");
    setTo("");
    setAmount("");
  };

  const deleteCredit = (id) => {
    const newCredits = credits.filter((todo) => {
      return todo.id !== id;
    });
    setCredits(newCredits);
  };

  return (
    <div>
      <div className="container">
        <Credits credits={credits} deleteCredit={deleteCredit} />
        <div className="row">
          <div className="col l3"></div>
          <div className="input-field col l2">
            <input
              id="lender"
              value={from}
              onChange={OnChangeFrom}
              type="text"
              class="validate"
            ></input>
            <label for="lender">Lender</label>
          </div>
          <div className="input-field col l2">
            <input
              id="borrower"
              value={to}
              onChange={OnChangeTo}
              type="text"
              class="validate"
            ></input>
            <label for="borrower">Borrower</label>
          </div>
          <div className="input-field col l2">
            <input
              id="amount"
              value={amount}
              onChange={OnChangeAmount}
              type="text"
              class="validate"
            ></input>
            <label for="amount">Amount</label>
          </div>
        </div>
        <div className="row">
          <div className="col l4"></div>
          <button
            type="button"
            onClick={handleAddCredit}
            className="btn btn-success center waves-effect waves-light center"
            id="addCredit">
            Add
          </button>
          <div className="col l2"></div>
        </div>
      </div>
      <div className="row">
        <div id="container1" className="col l6">
          <div ref={unsolvedNetwork}></div>
        </div>
        <div id="container2" className="col l6">
          <span id="temptext">
            Red link represents bus travel time : <br></br>
            Green link represents flight travel time : <br></br>
            Click on solve to get Solution !!
          </span>
          <div id="solvedNetwork"></div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button type="button" className="btn green" id="solve">
        Solve
      </button>
    </div>
  );
}

export default App;
