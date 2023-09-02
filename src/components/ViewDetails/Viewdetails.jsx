import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../ViewDetails/Recipe/Recipe"


const Viewdetails = () => {
  const [chefs, setChefs] = useState([]);
  const { id } = useParams();
  const recipes = chefs.recipes;
  console.log(id);

  useEffect(() => {
    fetch("../../../public/chef-person.json")
      .then((res) => res.json())
      .then((data) => setChefs(data.find((item) => item.id === Number(id))));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto mb-8">
          <div className="flex gap-8">
            <div>
              <img src={chefs.img} alt="" />
            </div>
            <div className=" flex flex-col glass p-8 justify-center items-start">
              <h2 className="card-title">{chefs?.name} </h2>
              <p><span className="font-semibold">Years of experience:</span>
              {chefs.yearsOfExperience}</p>
              <p>{chefs.bio}</p>
            
              <p>
              <span className="font-semibold">Numbers of recipes:</span>{" "}
              {chefs?.numberOfRecipes}
            </p>
            <p>
              <span className="font-semibold">Likes:</span> {chefs?.likes}
            </p>

            </div>

          </div>
          <div className="col-span-2">
          <h1 className="text-4xl font-semibold">
          {chefs?.name}'s Recipes
        </h1>
        {
          recipes?.map((recipe) => <Recipe recipe={recipe}></Recipe>)
        }

          </div>

        </div>
      </div>
    </>
  );
};

export default Viewdetails;
