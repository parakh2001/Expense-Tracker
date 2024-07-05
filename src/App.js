import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { NewTransaction } from './components/NewTransaction';
function App() {
  const [transactions, setTransactions] = useState([]);
  // Load transactions from localStorage when the component mounts
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);
  // Save transactions to localStorage whenever they change
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  const calculateIncomeAndExpense = () => {
    let income = 0;
    let expense = 0;
    transactions.forEach(transaction => {
      if (transaction.Amount > 0) {
        income += transaction.Amount;
      } else {
        expense += Math.abs(transaction.Amount);
      }
    });
    const balance = income - expense;
    return { income, expense, balance };
  };
  const { income, expense, balance } = calculateIncomeAndExpense();
  return (
    <>
      <Header />
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <History transactions={transactions} />
      <NewTransaction addTransaction={addTransaction} />
    </>
  );
}
export default App;