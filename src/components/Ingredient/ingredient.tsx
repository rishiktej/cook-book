import React from "react";

interface IngredientProps {
  item: {
    image: string;
    name: string;
  };
  onClick: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({ item, onClick }) => {
  return (
    <div className="w-32 h-32 bg-white rounded-15px p-6 text-center relative">
      <button
        className="w-8 h-8 bg-transparent border-0 absolute right-1 top-1"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-red-500 opacity-70 transition-opacity duration-100 ease-in hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt={item.name}
        className="w-20 h-20 object-contain object-center mx-auto"
      />
      <strong className="text-xs">{item.name}</strong>
    </div>
  );
};

export default Ingredient;
