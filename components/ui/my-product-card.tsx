import { Star, Verified } from 'lucide-react';
import React from 'react';

interface MyProductCardProps {
    instock: boolean;
    imageUrl: string;
    rating: number;
    reviews: number;
    name: string;
    price: number;
    oldPrice?: number;
}

const MyProductCard = (
    {
        product
    }
    :
    {
        product: MyProductCardProps
    }
) => {
    return (
        <div className='min-w-64 px-2'>
            {/* Stock Status */}
            <div className={`flex gap-2 text-sm ${product.instock ? 'text-green-500' : 'text-red-500'} items-center justify-start pb-2`}>
                <Verified className='' size={16} />
                <p>{product.instock ? 'In Stock' : 'Out of Stock'}</p>
            </div>

            {/* Product Image */}
            <img
                src={product.imageUrl}
                alt={`Product`}
                className="aspect-square object-cover mx-auto py-4"
            />

            {/* Product Rating */}
            <div className='flex gap-2 items-center py-2'>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            fill={index < product.rating ? "yellow" : "gray"}
                            strokeWidth={0}
                            size={16}
                        />
                    ))}
                </div>
                <p className='text-gray-400'>Reviews ({product.reviews})</p>
            </div>

            {/* Product Name */}
            <p className="truncate-multiline text-xl font-semibold">
                {product.name}
            </p>

            {/* Product Price */}
            <div className='py-4'>
                {product.oldPrice && <p className='text-gray-400 line-through'>${product.oldPrice.toFixed(2)}</p>}
                <p className='text-2xl font-semibold'>${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default MyProductCard;
