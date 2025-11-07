"use client";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props{
    products: Stripe.Product[];
}
export const Carousel = ({ products }: Props) => {
    const [current ,setCurrent]=useState<number>(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrent((prevCurrent)=>(prevCurrent +1) % products.length);
        },3000);
        return () => clearInterval(interval);
    },[products.length]);
    const CurrentProduct=products[current];
    const price = CurrentProduct.default_price as Stripe.Price;
    return <Card>{CurrentProduct.images && CurrentProduct.images[0] && (
        <div>
            <Image alt={CurrentProduct.name} src={CurrentProduct.images[0]} layout="fill" objectFit="cover"/>

           
        </div>
    )}<CardContent>;
    <CardTitle>{CurrentProduct.name}</CardTitle>
    {price && price.unit_amount && <p> RS {price.unit_amount/100}</p>}
    </CardContent>
    </Card>

}