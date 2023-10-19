import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({label, onClick, buttonClassName = "CalcButton"}) {
  return (
    <button className={buttonClassName} onClick ={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[oper, setOper] = useState(null);
  const[num2, setNum2] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if(oper === null) {
      if(num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);            
      setDisp(num);            
    } else {
      if(num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);            
      setDisp(num);       }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (oper === "+") {
      setDisp(parseInt(num1) + parseInt(num2));
    } else if (oper === "-") {
        setDisp(parseInt(num1) - parseInt(num2));
    } else if (oper === "*") {
      setDisp(parseInt(num1) * parseInt(num2));
    } else if (oper === "/") {
      setDisp(parseInt(num1) / parseInt(num2));
    } else {
      setDisp("ERROR");
    }
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    let name = "Jewel Marie P. Ocampo";
    setDisp(name);
  }

  return (
    <div className="calcu">
      <div className="CalcContainer">
        <h1>Calculator for Jewel Marie Ocampo - IT3A </h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"+"} onClick={operatorClickHandler} buttonClassName={'CalcButtonOpe'} />
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"-"} onClick={operatorClickHandler} buttonClassName={'CalcButtonOpe'}/>
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"*"} onClick={operatorClickHandler} buttonClassName={'CalcButtonOpe'}/>
          <CalcButton label={"C"} onClick={clearClickHandler} buttonClassName={'CalcButtonClear'}/>
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"="} onClick={equalClickHandler}buttonClassName={'CalcButtonOpe'}/>
          <CalcButton label={"/"} onClick={operatorClickHandler} buttonClassName={'CalcButtonOpe'}/>


        </div>
        <div className="Name">
          <CalcButton label={"Ocampo"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"} />
        </div>
      </div>
    </div>
  );
}


