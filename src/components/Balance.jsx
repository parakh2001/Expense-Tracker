import React from 'react';

export const Balance = ({ balance }) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white p-5 shadow-md rounded-md w-full max-w-md text-center'>
        <h2 className='text-2xl font-semibold'>Your Balance</h2>
        <p className='text-3xl'>${balance.toFixed(2)}</p>
      </div>
    </div>
  );
};
