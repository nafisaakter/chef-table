import React from 'react';
import './Hero.css';
import hero from "../../../assets/hero.png";
import hero1 from "../../../assets/hero1.png";
const Hero = () => {
    return (
        <div className='flex items-center justify-center gap-3 '>
            <div className='basis-6/12'>
               
                    <img className='hero-img' src={hero} alt="" />

                    </div>
                <div className='basis-6/12 pl-[20px]'>
                    <h1 className='hero-head mb-5'>Healthy Low Carb <br /> Pasta, Rice and Ready <br /> to Eat Meals</h1>
                    <div className='mb-5'>
                        <img src={hero1} alt="" />
                    </div>
                    <h2 className='text-[30px] text-[#735e56] mb-5'>That Fit Your Lifestyle</h2>
                    <button className='hero-btn'>SHOP ALL</button>

                </div>
          
        </div>
    );
};

export default Hero;