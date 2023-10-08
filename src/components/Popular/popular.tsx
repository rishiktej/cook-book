import React from "react";
import { Link } from "react-router-dom";

interface PopularProps {
  recipe: {
    id: string;
    image?: string;
    title: string;
    readyInMinutes: number;
  };
  time?: boolean;
}

const Popular: React.FC<PopularProps> = ({ recipe, time }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="block w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8"
    >
      <div className="relative overflow-hidden border rounded-xl bg-white card hover:shadow-lg transform hover:scale-105 transition-transform duration-250 ease-in">
        <img
          src={recipe.image ? recipe.image : "./images/placeholder.png"}
          alt={recipe.title}
          className="h-2/3 object-cover object-center transition-transform duration-250 ease-in hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-2 bg-opacity-45 backdrop-blur-7">
          <div className="text-white">
            <h3 className="text-xl font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap">
              {recipe.title}
            </h3>
            {time && (
              <small className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {recipe.readyInMinutes}mins
              </small>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Popular;
