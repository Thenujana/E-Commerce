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
     
<section className="relative overflow-hidden bg-gray-50 text-gray-900 py-24 px-8">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
   
    <div className="max-w-xl text-center md:text-left space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Experience <span className="text-indigo-600">The Best Shopping Experience</span>
      </h1>
      <p className="text-gray-700 text-lg">
        Elevate your music with our latest wireless headphones – sleek, powerful, and designed for comfort.
      </p>
      <Button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300">
        Shop Now
      </Button>
    </div>

   
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
      <Image
        src="/images/headphones.png"
        alt="Wireless Headphones"
        fill
        className="object-contain drop-shadow-2xl"
      />
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[100%] shadow-lg"></div>

  <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-100 rounded-full opacity-40 blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
</section>


      <div className=" text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-12">Featured Products</h1>
        <Carousel products={products.data} />
      </div>
    </div>
  );
}
