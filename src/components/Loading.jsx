import React from 'react'
import loader from '/loader.webp'

function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <img className='h-[50%] object-cover ' src={loader} alt="" />
    </div>
  )
}

export default Loading