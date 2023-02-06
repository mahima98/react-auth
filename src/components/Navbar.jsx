import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-900 px-4">
      <div className="flex justify-between max-w-7xl mx-auto  text-sky-300">
        <h1 className="text-center text-2xl font-bold py-4">
          <Link to="/">App</Link>
        </h1>
        <div className="flex gap-4 justify-center items-center ">
          <div className="text-sky-100 text-sm">
            <p>{user?.displayName}</p>
          </div>
          {user?.displayName ? (
            <button onClick={handleSignOut} className="py-4">
              Logout
            </button>
          ) : (
            <Link to="/signin">Sign in</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
