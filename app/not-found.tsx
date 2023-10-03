import React from 'react'

const notfound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
         <p className='text-8xl text-slate-300'>404</p>
         <h2 className='text-slate-300'>Error: 404 page not found</h2>
         <p  className='text-slate-300'>Sorry, the page you're looking for cannot be accessed</p>
    </div>
  )
}

export default notfound