import { Heart, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
                <p>Home  ›  About Us</p>
                <h1 className='text-3xl font-semibold my-8'>About Us</h1>
            </div>

            {/* start saction 1 */}
            <div className='bg-black text-white '>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between px-24 py-16'>
                    <div className='w-1/2 pr-16'>
                        <h3 className='text-5xl font-semibold mb-4'>A Family That Keeps On Growing</h3>
                        <div className='text-xl text-gray-400'>
                            <p className='mb-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
                            <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/products/about-us/1.png"
                            alt=''
                            width={500}
                            height={500}
                            objectFit='cover'
                        />
                    </div>
                </div>
            </div>
            {/* end saction 1 */}

            {/* start saction 2 */}
            <div className='bg-white text-black '>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between py-16'>
                    <div className="w-[500px] h-[500px] relative">
                        <Image
                            src="/images/products/about-us/2.png"
                            alt=""
                            fill
                        // className="object-cover"
                        />
                    </div>
                    <div className='w-1/2'>
                        <div className='flex gap-4'>
                            <div className='bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center'>
                                <div className="w-[20px] h-[20px] relative">
                                    <Image
                                        src="/images/logo/wlogo.png"
                                        alt=""
                                        fill
                                    // className="object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className='text-5xl font-semibold mb-4'>Shop.com</h3>
                        </div>
                        <div className='text-xl text-gray-400'>
                            <p className='mb-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
                            <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end saction 2 */}

            {/* start saction 3 */}
            <div className='bg-black text-white '>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between py-16 px-24'>
                    <div className='w-1/2'>
                        <div className='flex gap-4'>
                            <div className='bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center'>
                                <Heart />
                            </div>
                            <h3 className='text-5xl font-semibold mb-4'>Now You're In Safe Hands</h3>
                        </div>
                        <div className='text-xl text-gray-400'>
                            <p className='mb-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
                            <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                    </div>
                    <div className="w-[500px] h-[500px] relative">
                        <Image
                            src="/images/products/about-us/3.png"
                            alt=""
                            fill
                        // className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* end saction 3 */}

            {/* start saction 4 */}
            <div className='bg-white text-black '>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between py-16'>
                    <div className="w-[500px] h-[500px] relative">
                        <Image
                            src="/images/products/about-us/4.png"
                            alt=""
                            fill
                        // className="object-cover"
                        />
                    </div>
                    <div className='w-1/2'>
                        <div className='flex gap-4'>
                            <div className='bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center'>
                                <Star color='white' />
                            </div>
                            <h3 className='text-5xl font-semibold mb-4'>The Highest Quality of Products</h3>
                        </div>
                        <div className='text-xl text-gray-400'>
                            <p className='mb-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
                            <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end saction 4 */}

            {/* start saction 5 */}
            <div className='bg-black text-white'>
                <div className='max-w-screen-xl mx-auto flex items-center justify-between py-16 px-24'>
                    <div className='w-1/2'>
                        <div className='flex gap-4'>
                            <div className='bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center'>
                                <Truck />
                            </div>
                            <h3 className='text-5xl font-semibold mb-4'>We Deliver to Any Regions</h3>
                        </div>
                        <div className='text-xl text-gray-400'>
                            <p className='mb-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>
                            <p>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                        </div>
                    </div>
                    <div className="w-[500px] h-[500px] relative">
                        <Image
                            src="/images/products/about-us/5.png"
                            alt=""
                            fill
                        // className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* end saction 5 */}
        </div>
    )
}

export default page
