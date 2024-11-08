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


const products = [
    {
        id: 1,
        instock: true,
        image: '/images/new-products/1.png',
        rating: 4,
        reviews: 4,
        name: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One...',
        price: 499.00,
        oldPrice: 599.00,
    },
    {
        id: 2,
        instock: false,
        image: '/images/new-products/2.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    // Add more product objects here
];


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
                        {products.map((product) => (
                            <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6">
                                <CardContent className="flex flex-col p-6">
                                <MyProductCard
                                            key={product.id} // Use a unique key here
                                            instock={product.instock}
                                            image={product.image}
                                            rating={product.rating}
                                            reviews={product.reviews}
                                            name={product.name}
                                            price={product.price}
                                            oldPrice={product.oldPrice}
                                        />
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
