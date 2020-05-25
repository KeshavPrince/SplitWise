import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { genrateGraph } from "./genrateGraph";
import Credits from "./credits";
import { splitWiseAlgorithm } from "./SplitWiseAlgorithm";
function App() {
  const [credits, setCredits] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [start, setStart] = useState(true);
  const [isTempText2, setIsTempText2] = useState(true);
  const [isTempText1, setIsTempText1] = useState(true);
  const [amount, setAmount] = useState("");
  const unsolvedNetwork = useRef(null);
  const solvedNetwork = useRef(null);
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
    if (start == true) {
      setStart(false);
      return;
    }
    setIsTempText1(false);
    genrateGraph(credits, network, unsolvedNetwork, "from");
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

  const handleSolve = (e) => {
    e.preventDefault();
    let resultantGraph = splitWiseAlgorithm(credits);
    setIsTempText2(false);
    genrateGraph(resultantGraph, network, solvedNetwork, "to");
  };

  return (
    <div>
      <div className="container">
        <div
          className="red-text"
          style={{
            textDecorationLine: "underline",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            fontFamily: "Times",
            marginBottom: "20px",
          }}
        >
          SPLITWISE
        </div>
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10px",
          marginBottom: "30px",
        }}
      >
        <button
          type="button"
          onClick={handleAddCredit}
          className="btn btn-success center waves-effect waves-light center"
          id="addCredit"
        >
          Add
        </button>
      </div>
      <div className="row">
        <div id="container1" className="col l6">
          {isTempText1 === true && (
            <span id="temptext2">
              Simplified Solution Will be Displayed here..
              <br></br>
              Click on solve to get Solution !!
            </span>
          )}
          <div ref={unsolvedNetwork}></div>
        </div>
        <div id="container1" className="col l6">
          {isTempText2 === true && (
            <span id="temptext2">
              Simplified Solution Will be Displayed here..
              <br></br>
              Click on solve to get Solution !!
            </span>
          )}
          <div ref={solvedNetwork}></div>
        </div>
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <button
          type="button"
          onClick={handleSolve}
          className="btn green centr"
          id="solve"
        >
          Solve
        </button>
      </div>
    </div>
  );
}

export default App;
