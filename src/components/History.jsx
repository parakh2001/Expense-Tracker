import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const History = (props) => {
  const { transactions } = props;
  return (
    <div className='mt-6 ml-2'>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className='text-2xl font-semibold mb-4 text-center'>History</h2>
      <div className='bg-white p-4 shadow-md rounded-md'>
        <ul className=''>
          {transactions.map((trans, index) => {
            return (
              <li className='flex justify-between items-center border-b py-2 hover:bg-gray-100' key={index}>
                <div className='flex items-center relative'>
                  <i className='fas fa-times absolute left-0 transform -translate-x-full mr-2 text-gray-400 hover:text-red-500 opacity-0 hover:opacity-100'></i>
                  <span className='ml-6'>{trans.Transaction}</span>
                </div>
                <span className='text-green-500'>${trans.Amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default History;
