import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  categoryColor: string;
  rating: number;
}

const ProductSwiper: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Ноутбук MacBook Air M2",
      price: 119990,
      oldPrice: 135990,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      category: "ЗВУК",
      categoryColor: "blue",
      rating: 5,
    },
    {
      id: 2,
      name: "Наушники Sony WH-1000XM5",
      price: 32990,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      category: "ЗВУК",
      categoryColor: "blue",
      rating: 5,
    },
    {
      id: 3,
      name: "Умные часы Apple Watch Ultra",
      price: 89990,
      oldPrice: 99990,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      category: "СПОРТ",
      categoryColor: "red",
      rating: 4,
    },
    {
      id: 4,
      name: "Клавиатура механическая Corsair",
      price: 15990,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      category: "RGB",
      categoryColor: "purple",
      rating: 4,
    },
    {
      id: 5,
      name: "Монитор LG UltraWide 34»",
      price: 75990,
      oldPrice: 89990,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      category: "4K",
      categoryColor: "green",
      rating: 5,
    },
    {
      id: 6,
      name: "Видеокарта NVIDIA RTX 4080",
      price: 169990,
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
      category: "ГЕЙМЕР",
      categoryColor: "orange",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 pb-32">
      <div className="text-center mb-12">
        <h1 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
          Новинки
        </h1>
        <p className="text-gray-600 text-lg">
          Самые свежие поступления в нашем магазине
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="px-8 py-10">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2 h-12 w-12 bg-white shadow-lg border-0 hover:bg-gray-50 rounded-full" />
        <CarouselNext className="hidden md:flex right-2 h-12 w-12 bg-white shadow-lg border-0 hover:bg-gray-50 rounded-full" />
      </Carousel>
    </div>
  );
};

export default ProductSwiper;
