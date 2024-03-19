import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/pageHeader/PageHeader';
import Search from './components/Search/Search';
import Transaction from './components/transaction/Transaction';

function App() {
  return (
    <div className="App">
    <PageHeader/>
    <Search/>
    <Transaction/>
    </div>
  );
}

export default App;
