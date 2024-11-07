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
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                                <Card className=''>
                                    <CardContent className="flex flex-col p-6">
                                        <div className='flex gap-2 text-sm text-green-500 items-center justify-start pb-2'>
                                            <Verified className='' size={16} />
                                            <p>instock</p>
                                        </div>
                                        <img
                                            src={`/images/new-products/${index + 1}.png`} // Adjust the image extension if needed
                                            alt={`Product ${index + 1}`}
                                            className="w-32 h-32 object-cover ml-4" // Add image styling as required
                                        />

                                        <div className='flex gap-2 items-center py-4'>
                                            <div className="flex">
                                                <Star fill="yellow" strokeWidth={0} size={16} />
                                                <Star fill="yellow" strokeWidth={0} size={16} />
                                                <Star fill="yellow" strokeWidth={0} size={16} />
                                                <Star fill="yellow" strokeWidth={0} size={16} />
                                                <Star className='fill-slate-300' strokeWidth={0} size={16} />
                                            </div>
                                            <p className='text-gray-400'>Reviews (4)</p>
                                        </div>
                                        <p >EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                                        <div className='py-4'>
                                            <p className='text-gray-400 '>$499.00</p>
                                            <p className='text-2xl font-semibold'>$499.00</p>
                                        </div>
                                    </CardContent>
                                </Card>
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
