"use client"
import MySlide from '@/components/my-slide'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import BrandLogos from '@/components/BrandLogosProps ';
import Image from 'next/image';
import MyProductCard from '@/components/ui/my-product-card';
import Link from 'next/link'

interface Category {
    name: string;
    value: string;
}

interface ColorOption {
    name: string;
    colorCode: string;
}

interface AccordionContentProps {
    categories: Category[];
    colorCode: ColorOption[];
}
const categories = [
    { name: 'CUSTOM PCS', value: '15' },
    { name: 'MSI ALL-IN-ONE PCS', value: '45' },
    { name: 'HP/COMPAQ PCS', value: '1' },
];

const prices = [
    { rangPrice: '$0.00 - $1,000.00', value: '19' },
    { rangPrice: '$1,000.00 - $2,000.00', value: '21' },
    { rangPrice: '$2,000.00 - $3,000.00', value: '9' },
    { rangPrice: '$3,000.00 - $4,000.00', value: '6' },
    { rangPrice: '$4,000.00 - $5,000.00', value: '3' },
    { rangPrice: '$5,000.00 - $6,000.00', value: '1' },
    { rangPrice: '$6,000.00 - $7,000.00', value: '1' },
    { rangPrice: '$7,000.00 And Above', value: '1' },
];


const colors = [
    { name: 'Red', colorCode: '#FF0000' },
    { name: 'Green', colorCode: '#00FF00' },
    { name: 'Blue', colorCode: '#0000FF' },
    { name: 'Yellow', colorCode: '#FFFF00' },
    { name: 'Black', colorCode: '#000' },
    { name: 'White', colorCode: '#fff' },
];



const logos = [
    { src: '/images/logo/brand/1.png', alt: 'Brand 1' },
    { src: '/images/logo/brand/2.png', alt: 'Brand 2' },
    { src: '/images/logo/brand/3.png', alt: 'Brand 3' },
    { src: '/images/logo/brand/4.png', alt: 'Brand 4' },
    { src: '/images/logo/brand/5.png', alt: 'Brand 5' },
    { src: '/images/logo/brand/6.png', alt: 'Brand 6' },
    { src: '/images/logo/brand/7.png', alt: 'Brand 7' },
];


const products = [
    {
        id: 1,
        name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One",
        imageUrl: "/images/new-products/2.png",
        price: 499.00,
        oldPrice: 599.00,
        rating: 3,
        reviews: 4,
        instock: true,
    },
    {
        id: 2,
        name: "High Performance Laptop - Intel Core i7",
        imageUrl: "/images/new-products/4.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: false,
    },
    {
        id: 3,
        name: "High Performance Laptop - Intel Core i7",
        imageUrl: "/images/new-products/3.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 4,
        name: "High Performance Laptop - Intel Core i7",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: false,
    },
    {
        id: 5,
        name: "High Performance Laptop - Intel Core i7",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 6,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 7,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 8,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: false,
    },
    {
        id: 9,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 10,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 11,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: false,
    },
    {
        id: 12,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    {
        id: 13,
        name: "High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7  High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 High Performance Laptop - Intel Core i7 ",
        imageUrl: "/images/new-products/1.png",
        price: 899.00,
        oldPrice: 50,
        rating: 5,
        reviews: 10,
        instock: true,
    },
    // Add more product objects as needed
];






const Page: React.FC<AccordionContentProps> = () => {

    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorSelect = (colorName: string) => {
        setSelectedColor(colorName);
    };


    return (
        <div>
            {/* slide product */}
            <MySlide
                className='aspect-[26/2] w-full object-cover'
                images={[
                    "/images/slides/slide1.png",
                    "/images/slides/slide2.png",
                    "/images/slides/slide3.png",
                ]}
            />

            {/* end slide */}

            {/* start list products */}
            <h1 className='font-semibold text-3xl my-4'>MSI PS Series (20)</h1>

            {/* start fillter products section */}
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <button className='w-64 font-semibold flex items-center justify-center'>
                        <img src="/icons/left-arrow.png" alt="" className='w-2 mr-2' />
                        <p>Back</p>
                    </button>
                    <p className='pl-2 text-sm text-gray-400'>Items 1-35 of 61</p>
                </div>
                <div className='flex'>
                    <div className='flex gap-4 items-center'>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='border px-8'>
                                <AccordionTrigger className='text-sm text-gray-400'>Sort By: <span className='text-sm text-gray-900 font-semibold pl-2'> Position</span></AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className='border px-8'>
                                <AccordionTrigger className='text-sm text-gray-400'>Show: <span className='text-sm text-gray-900 font-semibold pl-2'> 35 per page</span></AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className='flex gap-4'>
                            <div className='max-w-8'>
                                <Image
                                    src="/icons/1.png"
                                    alt="img"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className='max-w-8'>
                                <Image
                                    src="/icons/filter.png"
                                    alt="img"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end fillter products section */}

            <div className='flex mr-2'>

                {/* start left side */}
                <div className='w-64'>
                    <div className=' bg-blue-50 p-4'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold text-xl mb-4'>Filters</h3>
                            <input
                                type="text"
                                placeholder='Clear Filter'
                                className='text-sm text-center border rounded-full py-2 px-4'
                            />
                        </div>
                        {/* start category  */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-semibold text-sm'>Category</AccordionTrigger>
                                <AccordionContent className=''>
                                    {categories.map((category, index) => (
                                        <div key={index} className="text-xs flex pb-2 justify-between items-center">
                                            <p>{category.name}</p>
                                            <p>{category.value}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* end category  */}
                        {/* start price  */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-semibold text-sm'>Prices</AccordionTrigger>
                                <AccordionContent className=''>
                                    {prices.map((price, index) => (
                                        <div key={index} className="text-xs flex pb-2 justify-between items-center">
                                            <p>{price.rangPrice}</p>
                                            <p>{price.value}</p>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* end price  */}
                        {/* start color  */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-semibold text-sm'>Color</AccordionTrigger>
                                <AccordionContent className='flex gap-2'>
                                    <div className="flex gap-2 flex-wrap mt-2">
                                        {colors.map((color) => (
                                            <div key={color.name} className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    id={color.name}
                                                    name="color"
                                                    value={color.name}
                                                    checked={selectedColor === color.name}
                                                    onChange={() => handleColorSelect(color.name)}
                                                    className="hidden"
                                                />
                                                <label
                                                    htmlFor={color.name}
                                                    className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color.name ? 'outline p-2 outline-2 outline-blue-500' : ''
                                                        }`}
                                                    style={{ backgroundColor: color.colorCode }}
                                                    title={color.name}
                                                ></label>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* end color  */}
                        {/* strat filter name */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-semibold text-sm'>Filter Name</AccordionTrigger>
                                <AccordionContent className='flex justify-center'>
                                    <button className='bg-blue-500 rounded-full px-14 py-2 text-white'>Apply Filters (2)</button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* end filter name */}
                    </div>

                    {/* start brand */}
                    <div className='bg-blue-50 p-4 my-2'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold text-xl mb-4'>Brands</h3>
                            <input
                                type="text"
                                placeholder='All Brands'
                                className='text-sm text-center border rounded-full py-2 px-4'
                            />
                        </div>
                    </div>
                    <BrandLogos logos={logos}
                        className='grid grid-cols-2 p-4 gap-8 py-4 bg-blue-50'
                    />
                    {/* end brand */}

                    <div className='bg-blue-50 p-4 my-2'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold text-xl mb-4'>Compare Products</h3>
                            <p className='text-sm text-center'>You have no items to compare.</p>
                        </div>
                    </div>
                    <div className='bg-blue-50 p-4 my-2'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold text-xl mb-4'>My Wish List</h3>
                            <p className='text-sm text-center'>You have no items in your wish list.</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={"/images/products/2.png"}
                            alt=''
                            width={256}
                            height={0}
                        />
                    </div>

                </div>
                {/* end left side */}

                {/* start right side */}
                <div className='flex-1 pl-4'>
                    {/* start list products */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {products.map((product) => (
                            <MyProductCard
                                key={product.id}
                                image={product.imageUrl}
                                instock={product.instock}
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                reviews={product.reviews}
                                oldPrice={product.oldPrice}
                            />
                        ))}
                    </div>
                    {/* end list products */}

                    {/* start pagination */}
                    <div className='flex justify-center my-16'>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                    {/* end pagination */}

                    <div className='flex flex-col items-center'>
                        <div className="relative mx-auto">
                            <p className="overflow-hidden relative text-gray-700 p-4">
                                MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

                                There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.

                                Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.

                                Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the "gamer mode" to increase the screen brightness.
                            </p>
                            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                        <Link href="#" className='border border-gray-400 rounded-full text-sm font-semibold text-gray-400 px-8 py-2 my-8'>
                            More
                        </Link>
                    </div>



                </div>
                {/* end right side */}

            </div>

            {/* end list products */}


        </div>
    )
}

export default Page
