import { stripe } from "@/lib/stripe";
import { ProductCard } from "@/components/product-card";
export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
   
    <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div>
            <input type="text" placeholder="Search products..." className="border border-gray-300 rounded-md p-2 ml-285" />
        </div>
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Our Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
