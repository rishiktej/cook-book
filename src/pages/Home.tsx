/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Cuisine from "../components/Cuisine/cuisine";
import useMedia from "../hooks/use-media";

const Home: React.FC = () => {
  const state = useMedia(700, 1100);

  return (
    <div className="bg-hero bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="p-4 lg:w-1/2 card__text">
          <small className="text-text-gray">GOOD FOOD. GOOD LIFE.</small>
          <h1 className="text-3xl font-bold leading-tight mt-2">
            What's in your kitchen?
          </h1>
          <p className="text-text-gray mt-2">
            Start cooking with what you have at home. Thousands of delicious
            recipes are only a click away.
          </p>
          <p>.....</p>
          <Link
            to="/ingredients"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 mr-2 mb-3"
          >
            Pick your ingredients
          </Link>
          <Link
            to="/cuss"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Pick your Cuisine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
