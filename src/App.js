import React from 'react';

import './App.css';
import logo from './logo.svg';
import Button from './components/Button.jsx';
import Window from './components/Window.jsx';
import ButtonClear from './components/ButtonClear.jsx';
import Logo from './components/Logo.jsx';
import Label from './components/Label.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  let [input, setInput] = useState(''); //setInput (funcion), input parametro para useState

  const agregarInput = val => {
    setInput(input + val);
  };

  const operator = val => {
    if(input.length > 0){
      let lastChar = input[input.length-1];
      if( lastChar !== '+' && lastChar !== '-' && lastChar !== '/' && lastChar !== 'x' ){
        setInput(input + val);
      }  
    }
  };

  const result = () => {
    if(input){
      if(input.includes('x')){
        input = input.replace('x', '*');
      }
      let isOperator = input[input.length-1];
      if(isOperator !== '*' && isOperator !== '+' && isOperator !== '-' && isOperator !== '/' ){
        let windowResult = evaluate(input);
        setInput(windowResult.toString());
      }
    }else{
      setInput('Digita un numero...');
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='calc-container'>
        <Window input={input} />
        <div className='row-up'>
          <Label
           logo={logo}
           text='Calculator' />
          <ButtonClear handleClick={() => setInput('')}>
            C
          </ButtonClear>
        </div>
        <div className='row'>
          <Button handleClick={agregarInput}>7</Button>
          <Button handleClick={agregarInput}>8</Button>
          <Button handleClick={agregarInput}>9</Button>
          <Button handleClick={operator}>x</Button>
        </div>
        <div className='row'>
        <Button handleClick={agregarInput}>4</Button>
        <Button handleClick={agregarInput}>5</Button>
        <Button handleClick={agregarInput}>6</Button>
        <Button handleClick={operator}>-</Button>
        </div>
        <div className='row'>
        <Button handleClick={agregarInput}>1</Button>
        <Button handleClick={agregarInput}>2</Button>
        <Button handleClick={agregarInput}>3</Button>
        <Button handleClick={operator}>+</Button>
        </div>
        <div className='row'>
        <Button handleClick={agregarInput}>.</Button>
        <Button handleClick={agregarInput}>0</Button>
        <Button handleClick={result}>=</Button>
        <Button handleClick={operator}>/</Button>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
