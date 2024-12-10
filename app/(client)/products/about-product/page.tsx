"use client"
import React, { useState } from 'react'

import {
    Card,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link'
import Image from 'next/image'


const colors = [
    { name: 'Red', colorCode: '#FF0000' },
    { name: 'Green', colorCode: '#00FF00' },
    { name: 'Blue', colorCode: '#0000FF' }
];


const page = () => {

    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorSelect = (colorName: string) => {
        setSelectedColor(colorName);
    };


    return (
        <Tabs defaultValue="account" >
            <TabsList className="max-w-screen-2xl mx-auto flex justify-between text-sm py-4">
                <div className='flex gap-4'>
                    <TabsTrigger className='' value="about-product">About Product</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="speces">Speces</TabsTrigger>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>On Sale from <span className='font-semibold'>$3,299.00</span></p>
                    <input type="number" className='border p-2 w-14 rounded-md bg-blue-50' />
                    <Link href="/shopping-card">
                        <button className='bg-blue-600 hover:bg-blue-500 text-white py-[10px]  px-8 rounded-full font-semibold'>
                            Add to Cart
                        </button>
                    </Link>
                    <Link href="/checkout">
                        <div className='flex gap-2 justify-center items-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 py-[10px] px-8 rounded-full font-semibold'>
                            <div className='w-16 h-auto'>
                                <Image
                                    src="/images/logo/paypal.png"
                                    alt=''
                                    width={100}
                                    height={10}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </TabsList>

            <hr />
            <TabsContent value="about-product">
                <div className='flex gap-4 justify-start'>
                    <div className='bg-blue-50 w-1/2 '>
                        <div className='pl-72'>
                            <p className='text-sm mt-12'>Home  ›  Laptops  ›  MSI WS Series</p>
                            <h1 className='text-2xl font-semibold my-4'>MSI MPG Trident 3</h1>
                            <p className='text-xs text-blue-600 my-4'>Be the first to review this product</p>
                            <p className='w-9/12'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                            <div className="flex gap-2 flex-wrap my-4">
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
                            <div className='flex justify-between text-sm w-9/12'>
                                <p>Have a Question?  <Link href="/contact-us" className='font-semibold text-blue-600 hover:underline mx-1'>Contact Us</Link></p>
                                <p>SKU D5515AI</p>
                            </div>
                        </div>

                        <div className='pl-48 mb-8 mt-16'>
                            <p className='font-semibold'>+ More information</p>
                        </div>

                    </div>
                    <div className='my-12'>
                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src="/icons/message.png"
                                    alt="logo"
                                    width={28}
                                    height={20}
                                />
                                <Image
                                    src="/icons/shad.png"
                                    alt="logo"
                                    width={28}
                                    height={20}
                                />
                                <Image
                                    src="/icons/favorite.png"
                                    alt="logo"
                                    width={28}
                                    height={20}
                                />
                            </div>
                            <Image
                                src="/images/products/about-product.png"
                                alt="logo"
                                width={220}
                                height={20}
                            />
                        </div>
                        <div className="flex items-center my-4">
                            <img src="/images/logo/zip.png" alt="" className="w-16" />
                            <span className="font-semibold text-xl pl-1">own</span>
                            <span className="text-blue-400 px-2 text-3xl">|</span>
                            <p className="text-xs">
                                it now, up to 6 months <br /> interest free
                                <span className="text-xs underline pl-2 hover:cursor-pointer">learn more</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-end gap-2 mb-8 pl-32'>
                        <div className='w-2 h-2 rounded-full bg-blue-600'></div>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                    </div>
                </div>

                <div className='bg-black text-white '>
                    <div className='max-w-screen-2xl mx-auto'>
                        <div className='flex gap-36'>
                            <div className='pl-24 w-1/3 py-16'>
                                <h1 className='text-4xl font-semibold my-4'>Outplay the Competittion</h1>
                                <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                                </p>
                                <p className='my-4'>*Performance compared to i7-9700. Specs varies by model.</p>
                            </div>
                            <div className='h-full max-w-full relative'>
                                <Image
                                    src="/images/products/inteli7.png"
                                    alt="logo"
                                    fill
                                />
                            </div>
                        </div>
                        <div className='flex items-end gap-2 pb-8 pl-32'>
                            <div className='w-2 h-2 rounded-full bg-blue-600'></div>
                            <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                            <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="details">
                <Card>

                </Card>
            </TabsContent>
            <TabsContent value="speces">
                <Card>

                </Card>
            </TabsContent>
        </Tabs>

    )
}

export default page
