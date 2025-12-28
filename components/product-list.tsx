
"use client";
import Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState } from "react";
interface Props {
  products: Stripe.Product[];
}
export const ProductList=({products}: Props) => {
   const [searchTerm,setSearchTerm]=useState<string>("");
   const filteredProducts=products.filter((product)=>{
    const nameMatch= product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const descriptionMatch= product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
return nameMatch || descriptionMatch;
   });
  return (
    <div>
      <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search"/>
      </div>
      <ul>
        {filteredProducts.map((product ,key) => {
            return (
              <li key={key}>
                <ProductCard product={product} />
              </li>
            );
            
        })};
      </ul>
    </div>

  );
};

