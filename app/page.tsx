import Image from "next/image";
import { stripe } from "../lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

  return (
    <div className="bg-white text-gray-900">
      {/* Hero / Welcome Section */}
<section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-24 px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="max-w-xl text-center md:text-left space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Redefine Your <span className="text-yellow-300">Shopping</span> Experience
      </h1>
      <p className="text-blue-100 text-lg">
        Find products you love with ease and unbeatable prices.
      </p>
      <Button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100">
        Shop Now
      </Button>
    </div>

    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[400px]">
      <Image src="/images/hero-img1.png" alt="Shopping" fill className="object-contain" />
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100%]"></div>
        
      </section>
      <div className=" text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-12">Featured Products</h1>
        <Carousel products={products.data} />
      </div>
    </div>
  );
}
