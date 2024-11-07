import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'

interface MySlideProps {
    images: string[];
}


const MySlide: React.FC<MySlideProps> = ({ images }) => {
    return (
        <Carousel className='relative'>
            <CarouselContent>
                {images.map((imageSrc, index) => (
                    <CarouselItem key={index}>
                        <Card className="h-80 w-full overflow-hidden">
                            <CardContent >
                                <Image
                                    src={imageSrc}
                                    alt={`Slide image ${index + 1}`}
                                    layout="responsive"
                                    width={900}
                                    height={500}
                                    objectFit="cover"
                                    priority={index === 0}
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
        </Carousel>
    )
}

export default MySlide
