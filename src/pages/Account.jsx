import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <h1 className="text-center text-sm md:text-xl font-mono font-bold pt-12 text-green-500">
        Account successfully signed in!
      </h1>
      <div className="flex flex-col justify-center items-center pt-4">
        <img src="loadingcat.gif" alt="" className="w-24 md:w-40" />
      </div>
    </div>
  );
};

export default Account;
