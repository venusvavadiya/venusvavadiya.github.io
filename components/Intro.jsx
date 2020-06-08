import React from "react";

const Intro = () => (
  <div className="max-w-lg mx-auto p-2 md:p-4 text-center">
    <img
      className="w-48 h-48 mx-auto rounded-full p-2 md:p-4"
      alt="Profile"
      src="https://placehold.it/500"
    />

    <div className="p-1 md:p-2">
      <p className="text-3xl p-1 md:p-2">
        Hi there, I am Venus.
      </p>

      <p className="text-gray-700 p-1 md:p-2">
        I am currently looking for Full Stack Development opportunities in the Winnipeg area.
      </p>
    </div>
  </div>
);

export default Intro;
