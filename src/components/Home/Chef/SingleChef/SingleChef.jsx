import React from 'react';
import { Link } from 'react-router-dom';
import './SingleChef.css';
const SingleChef = (props) => {
    const {id,name, img, yearsOfExperience, numberOfRecipes,likes} = props.chef;
    return (
        <>
            <div className='card w-96 mx-auto single-box flex justify-between'>
                <div className=''>
                <img className="w-[385px] h-[425px]" src={img} alt="" />
                 <div className='card-body'>
                 <h2 className='color-black text-[24px] font-semibold mb-3 '>{name}</h2>
                 <p className='color-gray text-[20px] mb-3'>Years of experience: {yearsOfExperience}</p>
                 <p className='color-gray text-[20px] mb-3'>Numbers of recipes: {numberOfRecipes}</p>
                 <p className='color-gray text-[20px] mb-3'>Likes:{likes}</p>
                 <Link to = {`/viewdetails/${id}`} className='btn '>VIEW RECIPES</Link>

                 </div>
                </div>
    
            </div>
        </>
    );
};

export default SingleChef;