import React from "react";

const ContentList = ({ items }) => (
  <ul className="pl-4 list-disc text-sm text-gray-800">
    {items.map((i) => (
      <li
        key={i}
        style={{
          paddingTop: '1px',
          paddingBottom: '1px',
        }}
      >
        {i}
      </li>
    ))}
  </ul>
);

export default ContentList;
