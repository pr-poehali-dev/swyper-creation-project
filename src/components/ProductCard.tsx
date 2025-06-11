import React from "react";
import CategoryBadge from "./CategoryBadge";
import StarRating from "./StarRating";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  categoryColor: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  oldPrice,
  image,
  category,
  categoryColor,
  rating,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
      <div className="relative mb-4">
        <div className="absolute top-2 left-2 z-10">
          <CategoryBadge category={category} color={categoryColor} />
        </div>
        <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-gray-900">
            {formatPrice(price)}
          </span>
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="mb-4">
          <StarRating rating={rating} />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 mt-auto">
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
