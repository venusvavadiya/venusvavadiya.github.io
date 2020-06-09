import React from "react";

const ContentHeader = ({ title, subtitle }) => (
  <div className="p-2 md:p-4">
    <p className="text-lg font-bold">
      {title}
    </p>

    <p className="text-gray-700">
      {subtitle}
    </p>
  </div>
);

export default ContentHeader;
