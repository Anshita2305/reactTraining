import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/pageHeader/PageHeader';
import Search from './components/Search/Search';
import Transaction from './components/transaction/Transaction';
import AddTransaction from './components/transaction/AddTransaction';

function App() {
  return (
    <div className="App">
    <PageHeader/>
    <Search/>
    <AddTransaction/>
    <Transaction/>
    </div>
  );
}

export default App;
