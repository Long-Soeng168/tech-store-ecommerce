import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Star, Verified } from 'lucide-react'

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    instock: string;
}

interface CategoryTitle {
    title: string;
    isActive: boolean;
}

interface Category {
    id: number;
    name: string;
    imageUrl: string;

}

// const categories: Category[] = [
//     { id: 1, name: 'Destops', imageUrl: '/images/products/custome_build.png' },
// ];

interface MyProductCategoryProps {
    products: Product[];
    series: CategoryTitle[];
    categories: Category[];
}





const MyProductCategory: React.FC<MyProductCategoryProps> = ({ products, series, categories }) => {
    return (
        <div className='m-4 md:m-0 md:my-4'>
            <div key={categories[0].id} className="relative min-w-[280px] aspect-[9/2] md:hidden">
                <Image
                    src={categories[0].imageUrl}
                    alt={categories[0].name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <p className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-xl md:text-3xl text-white">
                    {categories[0].name}
                </p>
                <p className="absolute bottom-5 text-gray-300 text-xs underline text-center left-1/2 transform -translate-x-1/2">
                    See All Products
                </p>
            </div>
            <ul className="m-4 md:m-0 flex flex-wrap gap-x-8 gap-y-2 text-gray-400 font-semibold text-sm md:text-xl">
                {series.map((item, index) => (
                    <li key={index} className="">
                        <p className={item.isActive ? 'text-gray-900' : 'text-gray-400'}>{item.title}</p>
                        {item.isActive && (
                            <div className="w-full h-1 rounded-full bg-blue-500 mt-1"></div>
                        )}
                    </li>
                ))}
            </ul>
            <div className='py-4'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex"
                >
                    <CarouselContent>

                        <div key={categories[0].id} className="relative min-w-[280px] hidden md:block">
                            <Image
                                src={categories[0].imageUrl}
                                alt={categories[0].name}
                                layout="responsive"
                                width={0}
                                height={0}
                                objectFit="cover"
                                className="w-full h-full"
                            />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-3xl text-white">
                                {categories[0].name}
                            </p>
                            <p className='absolute bottom-10 text-gray-300 text-xs underline text-center left-1/2 transform -translate-x-1/2'>
                                See All Products
                            </p>
                        </div>




                        {products.map((product) => (
                            <CarouselItem key={product.id} className="basis-1/2 sm:basis-1/3  md:basis-1/4 lg:basis-1/6">
                                <Card className=''>
                                    <CardContent className="flex flex-col p-6">
                                        <div className={`${product.instock === "In Stock" ? "text-green-500" : "text-red-500"} flex gap-2 text-sm items-center justify-start pb-2`}>
                                            <Verified className='' size={16} />
                                            <p className={product.instock === "In Stock" ? "text-green-500" : "text-red-500"}>
                                                {product.instock}
                                            </p>
                                        </div>

                                        <img
                                            src={product.imageUrl} // Adjust the image extension if needed
                                            alt={product.name}
                                            className="w-32 h-32 object-cover ml-4" // Add image styling as required
                                        />

                                        <div className='flex gap-2 items-center py-4'>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        fill={i < product.rating ? "yellow" : "none"}
                                                        strokeWidth={0}
                                                        size={16}
                                                    />
                                                ))}
                                            </div>
                                            <p className='text-gray-400'>Reviews {product.reviews}</p>
                                        </div>
                                        <p className="truncate-multiline">
                                            {product.name}
                                        </p>
                                        <div className='py-4'>
                                            {product.oldPrice && <p className='line-through text-gray-400'>${product.oldPrice.toFixed(2)}</p>}
                                            <p className='text-2xl font-semibold'>${product.price.toFixed(2)}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </div>
    )
}

export default MyProductCategory
