import React from "react";

const ContentList = ({ items }) => (
  <ul className="pl-4 md:pl-8 list-disc">
    {items.map(i => <li key={i}>{i}</li>)}
  </ul>
);

export default ContentList;
