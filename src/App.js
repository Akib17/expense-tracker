import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <div className="container">
      <GlobalContextProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
