import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {mount} from 'hello_world/HelloWorld'; 

function App() {
  const helloWorldDiv = useRef<HTMLDivElement>(null);
  useEffect( () => {
  mount(helloWorldDiv.current);
  } , []);
  return (
  <div>
  <h1>This is the container</h1>
 <div ref={helloWorldDiv} />
  </div>
  );
 }
 export default App; 