import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
export const History = (props) => {
  const { transactions, onDelete } = props;
  return (
    <div className="mt-6 ml-2">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className="text-2xl font-semibold mb-4 text-center">History</h2>
      <div className="bg-white p-4 shadow-md rounded-md">
        <ul>
          {transactions.map((trans, index) => (
            <li
              className="flex justify-between items-center border-b py-2 hover:bg-gray-100 px-4"
              key={index}
            >
              <div className="flex items-center">
                <i
                  className="fas fa-times text-gray-400 hover:text-red-500 cursor-pointer mr-3"
                  onClick={() => onDelete(index)}
                ></i>
                <span>{trans.Transaction}</span>
              </div>
              <span className={trans.Amount > 0 ? "text-green-500" : "text-red-500"}>
                ${trans.Amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div >
  );
};

export default History;
