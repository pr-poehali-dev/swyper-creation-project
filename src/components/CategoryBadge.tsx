import React from "react";

interface CategoryBadgeProps {
  category: string;
  color: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, color }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500 text-white";
      case "red":
        return "bg-red-500 text-white";
      case "purple":
        return "bg-purple-500 text-white";
      case "green":
        return "bg-green-500 text-white";
      case "orange":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${getColorClasses(color)}`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
