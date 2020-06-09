import React from "react";

const ContentBox = ({ title, subtitle, children }) => (
  <div className="p-4 md:p-8">
    <div>
      <p className="text-lg font-bold">
        {title}
      </p>

      <p className="text-gray-700">
        {subtitle}
      </p>
    </div>

    <div className="mt-1">
      {children}
    </div>
  </div>
);

export default ContentBox;
