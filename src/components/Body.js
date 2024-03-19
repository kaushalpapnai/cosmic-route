import React from 'react';
import videoBG from "../materials/hello.mp4"
import Typewriter from 'typewriter-effect';

const Body = () => {
  return (
    <div className='w-full h-screen'>
        <video 
        className='w-full h-full object-cover'
        src={videoBG} 
        autoPlay 
        loop 
        muted
        />
        <div
          className='absolute w-full h-full top-0 flex text-white justify-center items-center font-Bruno text-6xl'
        >
          <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                 .start();
                }}
            />
        </div>
    </div>
  );
};

export default Body;
