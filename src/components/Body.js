import React from 'react';
import videoBG from "../materials/hello.mp4"
import { TypeAnimation } from 'react-type-animation';

const Body = () => {
  return (
    <div className='w-full h-screen flex justify-center'>
        <video 
        className='w-full h-full object-cover'
        src={videoBG} 
        autoPlay 
        loop 
        muted
        />
        <div
          className='absolute w-full h-full top-0 flex text-white justify-center items-center font-Archivo text-4xl leading-relaxed text-center'
        >
      <TypeAnimation
      className=''
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WE ARE BEST IN SPACE TOURISM',
        1900, // wait 1s before replacing "Mice" with "Hamsters"
        'WE ARE BEST IN SATTELITE LAUNCHING',
        1900,
        'WE ARE BEST IN INTERPLANETTARY LAUNCH',
        1900,
        'WE ARE BEST IN TRANSPORT OF GOODS INTO SPACE',
        1900
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
    </div>
  );
};

export default Body;
