import React, { useState } from "react";

const ContentBox = ({ header, children }) => (
  <div className="p-1 md:p-2">
    <div className="p-1 md:p-2">
      {header}
    </div>

    { children && (
      <div className="p-1 md:p-2">
        {children}
      </div>
    )}
  </div>
);

export default ContentBox;
