import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Greeting name="Divesh" age={21}/>
      <Greeting name="Matt" age={21}/>
        <Greeting name="Sally" age={27}/>
        <Greeting name="Mike" age={24}/>
    </div>
  );
}

export default App;
