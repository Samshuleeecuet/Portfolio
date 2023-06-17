import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './home.css'

const Home = () => {
    return (
        <div id='homepage' className='min-h-screen flex flex-col justify-center items-center -mt-2 -ml-2'>
            <p className='text-3xl lg:text-5xl font-bold text-white font-mono'>Samshul Islam</p><br/>
            <p className=' lg:text-3xl text-white font-mono'>I'm <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Electrical & Electronics Engineering Student.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'MERN Stack Developer.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{fontStyle:'bold',textDecoration:'underline', display: 'inline-block', marginBottom:'15px', textDecorationColor:'blue' }}
      repeat={Infinity}
    /></p>
        </div>
    );
};

export default Home;