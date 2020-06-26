import React from "react";

const ContentList = ({ items }) => (
  <ul className="pl-2 md:pl-4 list-disc text-sm text-gray-800">
    {items.map(i => <li key={i}>{i}</li>)}
  </ul>
);

export default ContentList;
