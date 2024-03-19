import React from 'react'

const Navbar = () => {
  return (
    <div >
        <div className='flex justify-between w-full fixed bg-black text-white items-center'>
            <div className='m-5'>
              logo
            </div>
            <div className='flex list-none '>
                <li className='m-2'>home</li>
                <li className='m-2'>contact</li>
                <li className='m-2' >buy now</li>
            </div>
        </div>
    </div>
  )
}

export default Navbar
