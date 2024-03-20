import React from 'react'
import videoBG from "../materials/sattelite.mp4"

const Sattelite = () => {
  return (
    <div className='relative'>
    <video 
     className='w-screen h-screen object-cover'
     src={videoBG} 
     autoPlay 
     loop 
     muted
     />
     <div className='absolute top-52 left-10'>
       <div className='font-Archivo text-white font-bold text-6xl'>
        <h1 className='mb-4 font-Poiret font-normal'>BOOK YOUR SLOT</h1>
        <h1 className='mb-4'>SATTELITE LAUNCHING</h1>   
       </div>
        <button className='border border-white-500 pl-10 pr-10 pt-4 pb-4 text-white m-4 hover:bg-white hover:text-black transition-all duration-300 '>CLICK</button>
     </div>
 </div>
  )
}

export default Sattelite
