import { Star, Verified } from 'lucide-react'
import React from 'react'

const MyProductCard = () => {
    return (
        <div>
            <div className='flex gap-2 text-sm text-green-500 items-center justify-start pb-2'>
                <Verified className='' size={16} />
                <p>instock</p>
            </div>
            <img
                src={`/images/new-products/1.png`} // Adjust the image extension if needed
                alt={`Product 1`}
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
        </div>
    )
}

export default MyProductCard
