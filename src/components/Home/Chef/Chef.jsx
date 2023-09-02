import React from 'react';
import { useEffect, useState } from 'react';
import './Chef.css';
import SingleChef from './SingleChef/SingleChef';
const Chef = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("chef-person.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
    return (
        <>
            <div className='chef-container'>
            <div className='container mx-auto items-center my-5'>
                <div>
                    <h2 className='color-black text-[35px] font-semibold text-center'>Top Chefs</h2>
                    <p className=' color-gray w-1/2 mx-auto text-center my-3'>Our mission is to give our customers peace of mind when it comes to
                        food selection. We do so in 4 ways.
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        chefs.map(chef => (<SingleChef chef= {chef}></SingleChef>))
                    }

                </div>


            </div>

            </div>
        </>
    );
};

export default Chef;