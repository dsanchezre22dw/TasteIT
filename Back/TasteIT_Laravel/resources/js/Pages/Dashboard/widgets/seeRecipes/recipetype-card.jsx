// RecipeTypeBadge.jsx
import React from 'react';

const RecipeType = ({ id, name, index }) => (
  <span key={`${id}-${index}`} className="bg-indigo-100 text-indigo-800 text-xs font-medium text-center p-[0.7px] px-2 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
    {name}
  </span>
);

export default RecipeType;
