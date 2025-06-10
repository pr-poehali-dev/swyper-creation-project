import React from "react";
import Icon from "@/components/ui/icon";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Icon
        key={i}
        name={i <= rating ? "Star" : "Star"}
        size={16}
        className={
          i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />,
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
