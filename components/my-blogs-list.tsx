import React from 'react'
import MyBlogCard from './ui/my-blog-card';
import Image from 'next/image';
import { Button } from './ui/button';

const blogs = [
    {
        id: 1,
        title: "Exploring the Beauty of Modern Design",
        description:
            "An insight into how modern design trends shape user experiences.",
        image: "/images/slides/slide7.png",
        date: "Dec 1, 2024",
    },
    {
        id: 2,
        title: "The Rise of AI in Everyday Applications",
        description:
            "Learn how artificial intelligence is being integrated into daily tools.",
        image: "/images/slides/slide5.png",
        date: "Nov 25, 2024",
    },
    {
        id: 3,
        title: "Sustainability in Web Development",
        description:
            "Discover eco-friendly approaches in software and web development.",
        image: "/images/slides/slide8.png",
        date: "Nov 18, 2024",
    },
    {
        id: 4,
        title: "Innovations in Mobile Technology",
        description:
            "A look at the latest breakthroughs in mobile devices and platforms.",
        image: "/images/slides/slide6.png",
        date: "Nov 10, 2024",
    },
];

const MyBlogList = () => {
    return (
            <div className="grid grid-cols-1 px-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white flex flex-col items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                    >
                        <div className="w-full aspect-video relative">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-2 flex-1 flex flex-col justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm mb-2 line-clamp-1">
                                    {blog.date}
                                </p>
                                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {blog.description}
                                </p>
                            </div>
                            <Button>Read More</Button>
                        </div>
                    </div>
                ))}
            </div>

    )
}

export default MyBlogList
