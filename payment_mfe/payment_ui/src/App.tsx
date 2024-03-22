import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {mount} from 'paymentList/PaymentList'; 


function App() {
  const PaymentListDiv = useRef<HTMLDivElement>(null);
  useEffect( () => {
  mount(PaymentListDiv.current);
  } , []);
  return (
  <div>
  <h1>This is the container</h1>
 <div ref={PaymentListDiv} />
  </div>
  );
 } 
 
 export default App;
