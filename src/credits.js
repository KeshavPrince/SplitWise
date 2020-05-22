import React from "react";

const Credits = ({ credits, deleteCredit}) => {
  const thala = credits.length ? (
    credits.map((credit) => {
      return (
        <div className="collection-item" key={credit.id}>
          <span className ="red-text">{credit.to}</span>
          <span> owes </span>
          <span className="green-text">{credit.amount}</span>
          <span> bucks to </span>
          <span className="blue-text">{credit.from} </span>
          <i className="material-icons right" onClick = {() => { deleteCredit(credit.id) }} aria-hidden="true">delete</i>
        </div>
      );
    })
  ) : (
    <p className="center">No One Owes Anyone :)</p>
  );
  return <div className="todos collection">{thala}</div>;
};

export default Credits;
