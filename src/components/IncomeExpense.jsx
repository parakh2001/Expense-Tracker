import React from 'react';

export const IncomeExpense = ({ income, expense }) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white p-5 shadow-md rounded-md w-full max-w-md'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='text-center'>
            <p className='text-lg font-semibold'>Income</p>
            <p className='text-2xl text-green-500'>${income.toFixed(2)}</p>
          </div>
          <div className='text-center'>
            <p className='text-lg font-semibold'>Expense</p>
            <p className='text-2xl text-red-500'>${expense.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
