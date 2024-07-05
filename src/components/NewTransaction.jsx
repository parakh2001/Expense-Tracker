import React, { useState } from 'react';

export const NewTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  function handleText(e) {
    setText(e.target.value);
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleAddTransaction(e) {
    e.preventDefault();

    const newTransaction = {
      Transaction: text,
      Amount: parseFloat(amount),
    };

    addTransaction(newTransaction);

    // Clear input fields after adding the transaction
    setText('');
    setAmount('');
  }

  return (
    <div className='bg-white p-6 shadow-md rounded-md max-w-md mx-auto mt-6'>
      <h2 className='text-2xl font-semibold mb-4'>Add New Transaction</h2>
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
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Amount ('-' expense, '+' income)
        </label>
        <input
          value={amount}
          onChange={handleAmount}
          type='number'
          placeholder='Enter amount...'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
        />
      </div>
      <button
        onClick={handleAddTransaction}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'
      >
        Add New Transaction
      </button>
    </div>
  );
};
