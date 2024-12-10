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
        instock: true,
        imageUrl: '/images/new-products/1.png',
        rating: 4,
        reviews: 4,
        name: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One...',
        price: 499.00,
        oldPrice: 599.00,
    },
    {
        id: 2,
        instock: true,
        imageUrl: '/images/new-products/2.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 3,
        instock: false,
        imageUrl: '/images/new-products/3.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 4,
        instock: true,
        imageUrl: '/images/new-products/4.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 5,
        instock: false,
        imageUrl: '/images/new-products/5.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 6,
        instock: true,
        imageUrl: '/images/new-products/6.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 7,
        instock: true,
        imageUrl: '/images/new-products/7.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 8,
        instock: false,
        imageUrl: '/images/new-products/8.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 9,
        instock: false,
        imageUrl: '/images/new-products/9.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 10,
        instock: false,
        imageUrl: '/images/new-products/10.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 11,
        instock: false,
        imageUrl: '/images/new-products/11.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    // Add more product objects here
];






const Page = () => {

    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorSelect = (colorName: string) => {
        setSelectedColor(colorName);
    };


    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* slide product */}
            <MySlide
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
                    <div className="grid grid-cols-5">
                        {products.map((product) => (
                            <MyProductCard
                                key={product.id}
                                product={product}
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

                </div>
                {/* end right side */}

            </div>

            {/* end list products */}


        </div>
    )
}

export default Page
