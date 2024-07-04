import React from 'react'

const Title = ({title}) => {
  return (
    <div className='flex justify-center fixed bg-[#111827] z-10 w-full text-center py-6 border-b border-white'>
                <h1 className='text-3xl text-white font-bold md:full w-3/5'>{title}</h1>
            </div>
  )
}

export default Title