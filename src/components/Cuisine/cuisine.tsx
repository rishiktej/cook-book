import React from "react";
import Option from "./option";

const Cuisine: React.FC = () => {
  return (
    <>
      <h2 className="text-center mb-4">Filter by cuisine</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 justify-center lg:gap-8">
        <Option type="American" img="usa" />
        <Option type="Korean" img="korea" />
        <Option type="Japanese" img="japan" />
        <Option type="Indian" img="indian" />
        <Option type="Italian" img="italy" />
      </div>
    </>
  );
};

export default Cuisine;
