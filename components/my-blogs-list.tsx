import React from 'react'
import MyBlogCard from './ui/my-blog-card';

const feedbacks = [
    {
        id: 1,
        image: '/images/feedback/1.png',
        text: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
        date: '01.09.2020',
    },
    {
        id: 2,
        image: '/images/feedback/1.png',
        text: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
        date: '01.09.2020',
    },
    {
        id: 3,
        image: '/images/feedback/1.png',
        text: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
        date: '01.09.2020',
    },
    {
        id: 4,
        image: '/images/feedback/1.png',
        text: 'If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...',
        date: '01.09.2020',
    },
];

const MyBlogList = () => {
    return (
        <div className="w-full grid px-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {feedbacks.map((feedback) => (
                <MyBlogCard key={feedback.id} {...feedback} />
            ))}
        </div>

    )
}

export default MyBlogList
