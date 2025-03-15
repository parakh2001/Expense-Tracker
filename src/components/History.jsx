import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const History = ({ transactions, onDelete }) => {
  return (
    <div className="mt-6 ml-2">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="text-2xl font-semibold mb-4 text-center">History</h2>
      <div className="bg-white p-4 shadow-md rounded-md max-w-lg mx-auto">
        <ul className="space-y-2">
          {transactions.map((trans, index) => (
            <li
              key={index}
              className="grid grid-cols-3 items-center border-b py-2 px-2 hover:bg-gray-100 text-sm md:text-base"
            >
              {/* Delete Button & Transaction Name */}
              <div className="flex items-center gap-2">
                <i
                  className="fas fa-times text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={() => onDelete(index)}
                ></i>
                <span className="truncate">{trans.Transaction}</span>
              </div>

              {/* Amount (Green for income, Red for expense) */}
              <span
                className={`text-right ${trans.Amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
              >
                ${trans.Amount}
              </span>

              {/* Date (Aligned Right) */}
              <span className="text-gray-500 text-xs md:text-sm text-right">
                {trans.Date}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default History;
