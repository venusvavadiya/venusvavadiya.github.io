import React from "react";

const ContentHeader = ({ title, subtitle, subsubtitle }) => (
  <div className="p-2 md:p-4">
    <p className="text-lg font-bold">
      {title}
    </p>

    <p className="text-gray-800">
      {subtitle}
    </p>

    <p className="text-sm text-gray-600 mt-2">
      {subsubtitle}
    </p>
  </div>
);

export default ContentHeader;
