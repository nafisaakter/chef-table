import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user, "from navbar");

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="mt-8 mb-5 container mx-auto ">
      <div className="rounded-lg container mx-auto flex justify-between items-center bg-[#00800026] my-5 px-5">
        <div className="logo font-allura">
          <h2>Chef Table</h2>
        </div>
        <div className="flex justify-center items-center gap-5 text-[16px]">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          {user ? (
            <div onClick={handleLogOut}>
              <button className="my-btn">Logout</button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="my-btn">Login</button>
              </Link>
            </div>
          )}
          {user && (
            <div className="avatar online">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
