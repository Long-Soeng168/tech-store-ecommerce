import React from 'react'

const MyService = () => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-28 py-4'>
            <div className='flex flex-col justify-center items-center  py-8 w-64'>
                <div className='flex items-center justify-center bg-blue-500 p-4 w-16 h-16 rounded-full'>
                    <img src="/icons/service/support.png" alt="icon" />
                </div>
                <p className='text-2xl font-semibold py-4'>Product Support</p>
                <p className='text-center text-gray-500'>Up to 3 years on-site warranty available for your peace of mind.</p>
            </div>
            <div className='flex flex-col justify-center items-center  py-8 w-64'>
                <div className='flex items-center justify-center bg-blue-500 p-4 w-16 h-16 rounded-full'>
                    <img src="/icons/service/account.png" alt="icon" />
                </div>
                <p className='text-2xl font-semibold py-4'>Personal Account</p>
                <p className='text-center text-gray-500'>With big discounts, free delivery and a dedicated support specialist.</p>
            </div>
            <div className='flex flex-col justify-center items-center  py-8 w-64'>
                <div className='flex items-center justify-center bg-blue-500 p-4 w-16 h-16 rounded-full'>
                    <img src="/icons/service/tag.png" alt="icon" />
                </div>
                <p className='text-2xl font-semibold py-4'>Amazing Savings</p>
                <p className='text-center text-gray-500'>Up to 70% off new Products, you can be sure of the best price.</p>
            </div>
        </div>
    )
}

export default MyService
