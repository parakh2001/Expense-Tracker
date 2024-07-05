import React from 'react';
export const Transaction = (props)=>{
    return (
        <li className='flex justify-between items-center border-b py-2 hover:bg-gray-100'>
            {Transaction.text}<span></span>
        </li>
    )
}