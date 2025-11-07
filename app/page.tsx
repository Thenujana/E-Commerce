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
<section className="relative overflow-hidden bg-[#1865eb]  text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text content */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Welcome to the E-Shoping Store
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Discover the latest products at unbeatable prices.
            </p>
            <Button
              asChild
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition-all duration-300"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden">
              <video
                src="/images/hero-vid.mp4"
                
                width={450}
                height={450}
                className="object-contain  hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>

        {/* Decorative blur background */}
        <div className="absolute -top-10 -right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">
            Featured Products
          </h3>
        </div>
      </section>
    </div>
  );
}
