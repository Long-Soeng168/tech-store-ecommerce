import React from 'react'
import { Star, StarHalf, Verified } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import MyProductCard from './ui/my-product-card';

const MyNewProduct = () => {
    return (
        <div className=''>
            <div className='flex justify-between font-semibold pt-8'>
                <h1 className='text-xl'>New Product</h1>
                <p className='text-[12px] text-blue-500 underline'>See All New Products</p>
            </div>
            <div>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                                <CardContent className="flex flex-col p-6">
                                    <MyProductCard />
                                </CardContent>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-0 bg-gray-300 rounded rounded-r-full text-white border-none transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute top-1/2 right-0 bg-gray-300 rounded rounded-l-full text-white border-none transform -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </div>
    )
}

export default MyNewProduct
