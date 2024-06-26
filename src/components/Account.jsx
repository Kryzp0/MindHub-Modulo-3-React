import React from 'react'

const Account = ({ number, balance, creationDate }) => {
    return (
        <div className='flex flex-col text-white p-4 bg-[#1f2937] w-[340px] h-[230px] justify-around rounded-xl shadow-[0_3px_10px_rgb(13, 21, 39)]'>
            <div>
                <div className='flex justify-between p-4'>
                    <p>Account Number:</p>
                    <p>{number}</p>
                </div>
                <div className='flex justify-between p-4'>
                    <p>Balance:</p>
                    <p className='text-3xl font-extrabold'>${balance}</p>
                </div>
                <div className='flex justify-between p-4'>
                    <p>Creation Date:</p>
                    <p>{creationDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Account