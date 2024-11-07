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
import Image from 'next/image';

const Products = () => {
    return (
        <div>
            <div className='flex items-center justify-center bg-blue-100 py-4'>
                <img src="/images/logo/zip.png" alt="" />
                <p className='text-xl'>
                    <span className='font-semibold text-2xl'>own</span><span className=' text-blue-400 px-2 text-3xl'>|</span> it now, up to 6 months interest free <span className='text-sm underline'>learn more</span>
                </p>
            </div>
            {/* start product category */}
            <div className='py-4'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex"
                >
                    <CarouselContent>
                        <div className="relative min-w-[280px]">
                            <Image
                                src="/images/products/custome_build.png"
                                alt="Custom Builds"
                                layout="responsive"
                                width={0}
                                height={0}
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-3xl text-white">
                                Custom Builds
                            </p>
                            <p className='absolute bottom-10 text-gray-300 text-xs underline text-center left-1/2 transform -translate-x-1/2'>
                                See All Products
                            </p>
                        </div>


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
                </Carousel>
            </div>
            <div className='py-4'>
                <ul className='flex gap-8 text-gray-400 font-semibold text-xl'>
                    <li className=''>
                        <p className='text-gray-900'>MSI GE Series</p>
                        <div className='w-100 h-1 rounded-full bg-blue-500'></div>
                    </li>
                    <li>MSI GT Series</li>
                    <li>MSI GL Series</li>
                    <li>MSI GE Series</li>
                </ul>
                <div className='py-4'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full flex"
                    >
                        <CarouselContent>
                            <div className="relative min-w-[280px]">
                                <Image
                                    src="/images/products/custome_build.png"
                                    alt="Custom Builds"
                                    layout="responsive"
                                    width={0}
                                    height={0}
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-3xl text-white">
                                    MSI Laptops
                                </p>
                                <p className='absolute bottom-10 text-gray-300 text-xs underline text-center left-1/2 transform -translate-x-1/2'>
                                    See All Products
                                </p>
                            </div>


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
                    </Carousel>
                </div>

            </div>
            {/* end product category */}
            
            {/* start brand logo */}
            <div className='flex flex-wrap gap-16 justify-evenly items-center py-16'>
                <img src="/images/logo/brand/1.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/2.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/3.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/4.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/5.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/6.png" alt="logo" width={120}/>
                <img src="/images/logo/brand/7.png" alt="logo" width={120}/>
            </div>
            {/* end brand logo */}

            {/* start Follow us on Instagram for News, Offers & More */}

            <div className='flex justify-start gap-8 flex-wrap'>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
                <div className='py-4 max-w-56 flex flex-col items-center'>
                    <img src="/images/feedback/1.png" alt="image" className='w-full object-cover' />
                    <p className='text-center py-4 mx-2'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
                    <p className='text-sm text-gray-400'>01.09.2020</p>
                </div>
            </div>
            {/* end Follow us on Instagram for News, Offers & More */}

        </div>
    )
}

export default Products
