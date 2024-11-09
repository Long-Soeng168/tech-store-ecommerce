import React from 'react'

const MyService = () => {
    return (
        <div className="mx-8 flex flex-wrap items-center justify-center gap-x-10 md:gap-16 lg:gap-28 py-4 px-2">
            {[
                {
                    imgSrc: "/icons/service/support.png",
                    title: "Product Support",
                    description: "Up to 3 years on-site warranty available for your peace of mind.",
                },
                {
                    imgSrc: "/icons/service/account.png",
                    title: "Personal Account",
                    description: "With big discounts, free delivery, and a dedicated support specialist.",
                },
                {
                    imgSrc: "/icons/service/tag.png",
                    title: "Amazing Savings",
                    description: "Up to 70% off new products, ensuring the best price.",
                },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center py-4 w-48 sm:w-64">
                    <div className="flex items-center justify-center bg-blue-500 p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full">
                        <img src={item.imgSrc} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold py-4">{item.title}</p>
                    <p className="text-sm sm:text-base text-gray-500 px-2">{item.description}</p>
                </div>
            ))}
        </div>

    )
}

export default MyService
