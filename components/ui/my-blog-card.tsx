import Image from "next/image";
import React from "react";

interface FeedbackItem {
    id: number;
    image: string;
    text: string;
    date: string;
}

const MyBlogCard: React.FC<FeedbackItem> = ({ image, text, date }) => {
    return (
        <div className="w-full bg-white rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
                height={600}
                width={600}
                src={image}
                alt=""
                className="w-full aspect-video object-cover"
            />
            <div className="p-2">
                <p className="text-lg font-medium text-gray-800 line-clamp-2 mb-2">{text}</p>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </div>
    );
};

export default MyBlogCard;
