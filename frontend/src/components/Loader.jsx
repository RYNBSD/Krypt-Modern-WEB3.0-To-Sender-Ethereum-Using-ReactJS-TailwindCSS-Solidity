import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center py-3'>
      <div className='animate-spin rounded-full w-32 h-32 border-b-2 border-red-700'></div>
    </div>
  )
}

export default Loader