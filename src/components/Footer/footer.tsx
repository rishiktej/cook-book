import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-text-gray py-10 text-gray-300">
      <img
        src="../images/logo.svg"
        alt="logo"
        className="w-32 mx-auto filter invert-100 sepia-100 saturate-0 hue-rotate-288 brightness-102 contrast-102"
      />
      <p className="mt-2">Created by Team COD</p>
      <p>
        Email:{" "}
        <a href="rishiktejgangadi.my@gmail.com" className="text-gray-300">
          rishiktejgangadi@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
