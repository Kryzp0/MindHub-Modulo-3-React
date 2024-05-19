import React from 'react'

const Loan = ({type,amount,dateOfApplication}) => {
  return (
    <div className='flex flex-col text-white p-4 bg-[#1f2937] w-[340px] h-[230px] justify-around rounded-xl shadow-[0_3px_10px_rgb(13, 21, 39)]'>
            <div>
                <div className='flex p-4'>
                    <p className='text-xl font-bold'>{type}</p>
                </div>
                <div className='flex justify-between p-4'>
                    <p>Amount:</p>
                    <p className='text-3xl font-extrabold'>${amount}</p>
                </div>
                <div className='flex justify-between p-4'>
                    <p>Date of application:</p>
                    <p>{dateOfApplication}</p>
                </div>
            </div>
        </div>
  )
}

export default Loan