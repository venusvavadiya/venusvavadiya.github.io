import React, { useState } from "react";

const ContentBox = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer p-2 md:p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {header}

        <p className="p-2 md:p-4">
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} />
        </p>
      </div>

      {isOpen && (
        <div className="p-2 md:p-4 bg-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

export default ContentBox;
