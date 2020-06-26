import React, { useState } from "react";

const ContentBox = ({ header, children }) => (
  <div className="p-2 md:p-4">
    <div className="p-2 md:p-4">
      {header}
    </div>

    { children && (
      <div className="p-2 md:p-4">
        {children}
      </div>
    )}
  </div>
);

export default ContentBox;
