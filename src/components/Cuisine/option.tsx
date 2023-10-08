import React from "react";
import { Link } from "react-router-dom";

interface CuisineProps {
  type: string;
  img: string;
}

const Cuisine: React.FC<CuisineProps> = ({ type, img }) => {
  return (
    <Link
      to={`/cuisine/${type.toLowerCase()}`}
      className="inline-block flex items-center bg-light-blue rounded-10px px-2 py-1 text-black no-underline transition-opacity duration-150 ease-in hover:opacity-60"
    >
      <img
        src={`./images/${img}.svg`}
        alt={`${type} flag`}
        className="w-1/4 mr-4 max-w-70px"
      />
      <strong className="text-sm"> {type}</strong>
    </Link>
  );
};

export default Cuisine;
