import React from 'react';
import banner from '../../../assets/banner.jpg'
import './Banner.css'
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div className='relative'>
            <div className='karate-banner'>
                <img src={banner} alt="" />
            </div>
            <div className='absolute top-1/3 ml-10'>
                <h1 className='text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600'>
                    R N R Gladiator<br/>Int. <span><Typewriter
              options={{
                strings: ["Karate Academy", "空手アカデミー"],
                autoStart: true,
                loop: true,
              }}
            /></span>
                </h1>
                <p className='text-white my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam harum pariatur aliquid aut<br/> incidunt libero quia, qui tempora! Magnam dicta dolorum cumque veniam aliquam vitae!</p>

                <button className='my-btn uppercase mt-3 hover:bg-gradient-to-t from-cyan-400 to-sky-600'>Enroll Now</button>
            </div>
        </div>
    );
};

export default Banner;