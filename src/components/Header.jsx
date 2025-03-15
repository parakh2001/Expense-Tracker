import React from 'react'
export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-gradient-to-r from-red-800 to-red-500 text-white py-6 px-8 rounded-b-2xl shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-md">
        Expense Tracker
      </h1>
      <p className="text-lg mt-2 opacity-90">Track your income and expenses effortlessly</p>
    </header>
  );
}
