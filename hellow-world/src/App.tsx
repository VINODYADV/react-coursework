import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <>
    <h1>Hello world</h1>
    <Greeting name="Vinod" age={26}/>
    <Greeting name="Vandana" age={27}/>
    <Greeting name="Attreya" age={3}/>
    </>
    
  )
}

export default App;
