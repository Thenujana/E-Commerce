"use client";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const CurrentProduct = products[current];
  const price = CurrentProduct.default_price as Stripe.Price;

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <Card className="relative w-[95%] lg:w-[900px] xl:w-[1100px] h-[350px] md:h-[400px] bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-3xl flex flex-col md:flex-row">
        {/* Product Image */}
        {CurrentProduct.images && CurrentProduct.images[0] && (
          <div className="relative w-full md:w-1/2 h-56 md:h-full overflow-hidden">
            <Image
              alt={CurrentProduct.name}
              src={CurrentProduct.images[0]}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Product Info */}
        <CardContent className="flex flex-col justify-center items-center text-center p-8 md:w-1/2">
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
            {CurrentProduct.name}
          </CardTitle>
          {price && price.unit_amount && (
            <p className="text-2xl font-semibold text-blue-700 mb-4">
              Rs {(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md">
            Experience our featured collection — crafted for comfort, style, and everyday excellence.
          </p>
          <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition">
            Shop Now
          </button>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 text-blue-700 rounded-full p-2 shadow-lg hover:bg-blue-100 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 text-blue-700 rounded-full p-2 shadow-lg hover:bg-blue-100 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="flex space-x-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
