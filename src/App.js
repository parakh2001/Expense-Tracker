import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { NewTransaction } from './components/NewTransaction';
function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);
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
  const onDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };
  const { income, expense, balance } = calculateIncomeAndExpense();
  return (
    <>
      <Header />
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <History transactions={transactions} onDelete={onDelete} />
      <NewTransaction addTransaction={addTransaction} />
    </>
  );
}
export default App;