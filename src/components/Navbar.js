import React from 'react'

const Navbar = () => {
  return (
    <div >
        <div className='flex justify-between w-full fixed top-0 bg-black text-white items-center z-50'>
            <div className='m-5'>
              <img 
              className='h-10 w-20'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBczZrt5J7UOjBPPBz_6O0mtHUz75XVOkuEw&usqp=CAU'
              >
              </img>
            </div>
            <div className='flex list-none mr-5 border border-red-200 justify-between w-1/5 '>
                <li className='m-2 hover:bg-white hover:text-black'>home</li>
                <li className='m-2'>contact</li>
                <li className='m-2' >buy now</li>
                <li className='m-2' >explore</li>
            </div>
        </div>

    </div>
  )
}

export default Navbar
