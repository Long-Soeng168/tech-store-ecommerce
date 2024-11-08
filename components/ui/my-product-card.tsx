import { Star, Verified } from 'lucide-react';
import React from 'react';

interface MyProductCardProps {
    instock: boolean;
    image: string;
    rating: number;
    reviews: number;
    name: string;
    price: number;
    oldPrice?: number;
}

const MyProductCard: React.FC<MyProductCardProps> = ({ instock, image, rating, reviews, name, price, oldPrice }) => {
    return (
        <div>
            {/* Stock Status */}
            <div className={`flex gap-2 text-sm ${instock ? 'text-green-500' : 'text-red-500'} items-center justify-start pb-2`}>
                <Verified className='' size={16} />
                <p>{instock ? 'In Stock' : 'Out of Stock'}</p>
            </div>

            {/* Product Image */}
            <img
                src={image}
                alt={`Product`}
                className="w-32 h-32 object-cover ml-4"
            />

            {/* Product Rating */}
            <div className='flex gap-2 items-center py-4'>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <Star
                            key={index}
                            fill={index < rating ? "yellow" : "gray"}
                            strokeWidth={0}
                            size={16}
                        />
                    ))}
                </div>
                <p className='text-gray-400'>Reviews ({reviews})</p>
            </div>

            {/* Product Name */}
            <p className='truncate-3-lines'>{name}</p>

            {/* Product Price */}
            <div className='py-4'>
                {oldPrice && <p className='text-gray-400 line-through'>${oldPrice.toFixed(2)}</p>}
                <p className='text-2xl font-semibold'>${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default MyProductCard;
