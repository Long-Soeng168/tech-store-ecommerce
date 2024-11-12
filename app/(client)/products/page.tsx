"use client"
import MySlide from '@/components/my-slide'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import BrandLogos from '@/components/BrandLogosProps ';

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
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <button className='w-64 bg-red-200 justify-start items-start'>Back</button>
                    <p>Items 1-35 of 61</p>
                </div>
                <div className='flex'>
                    <div className='flex gap-4'>
                        <div className='border p-2'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className='border p-2'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className='flex gap-4'>
                            <img src="#" alt="img" />
                            <img src="#" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end fillter products section */}
            <div className='flex'>

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
                    <BrandLogos logos={logos} />
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

                </div>
                {/* end left side */}

                {/* start right side */}
                <div className='flex-1 px-4'>
                    
                </div>
                {/* end right side */}

            </div>

            {/* end list products */}


        </div>
    )
}

export default Page
