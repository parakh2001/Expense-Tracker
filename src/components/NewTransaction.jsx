import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";

export const NewTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleText(e) {
    setText(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleAddTransaction(e) {
    e.preventDefault();
    if (!text || !amount || !date) {
      alert("Please fill all fields.");
      return;
    }
    const newTransaction = {
      Transaction: text.charAt(0).toUpperCase() + text.slice(1),
      Amount: parseFloat(amount),
      Date: date,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setDate('');
  }

  return (
    <div className='bg-white p-6 shadow-md rounded-md max-w-md mx-auto mt-6'>
      <h2 className='text-2xl font-semibold mb-4'>Add New Transaction</h2>

      {/* Text Input */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Text</label>
        <input
          value={text}
          onChange={handleText}
          type='text'
          placeholder='Enter text...'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>

      {/* Amount Input */}
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Amount ('-' expense, '+' income)
        </label>
        <input
          value={amount}
          onChange={handleAmount}
          type='number'
          placeholder='Enter amount...'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>

      {/* Date Input with Calendar Icon */}
      <div className='mb-4 relative'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Date</label>
        <div className="relative">
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          />
        </div>
      </div>

      {/* Add Transaction Button */}
      <button
        onClick={handleAddTransaction}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full'
      >
        Add New Transaction
      </button>
    </div>
  );
};
