"use client";

import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block transform transition-all duration-300 hover:scale-[1.02]"
    >
      <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg border border-gray-100 bg-white transition-all duration-300">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
          {product.images && product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 text-xs">
              No Image
            </div>
          )}
        </div>

        <CardContent className="p-3 text-center">
          <CardTitle className="text-sm font-semibold text-gray-800 truncate mb-1">
            {product.name}
          </CardTitle>

          {price && price.unit_amount && (
            <p className="text-blue-700 font-bold text-sm">
              RS {(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
