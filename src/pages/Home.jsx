import React from "react";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center py-2 px-4">
          <div className="w-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z"
              />
            </svg>
          </div>
          <div className="text-xs pl-[2px] pr-1">Homepage</div>
          <div className="w-4 pt-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-40">
        <img src="catgif.gif" alt="" className="w-56 md:w-auto" />
      </div>
    </div>
  );
};

export default Home;
