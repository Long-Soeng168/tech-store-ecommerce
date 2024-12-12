// import React from 'react'
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
// import Image from 'next/image';

// const MyGallery = () => {
//     return (
//         <div>
//             <Image
//                 src='/images/new-products/2.png'
//                 alt=''
//                 width={400}
//                 height={400}
//                 className="object-contain border-[0.5px] rounded-md border-primary w-full aspect-square"
//             />
//             <ScrollArea className='w-full pb-4'>
//                 <div className='flex  w-full gap-4 mt-4'>
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                     <Image
//                         src='/images/new-products/2.png'
//                         alt="Thumbnail"
//                         width={80}
//                         height={80}
//                         className="border-[0.5px] rounded-md border-primary cursor-pointer hover:shadow-lg"
//                     />
//                 </div>
//                 <ScrollBar orientation="horizontal" />
//             </ScrollArea>
//         </div>
//     )
// }

// export default MyGallery

'use client'

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const SimpleGallery: React.FC = () => {
  const galleryID = 'static-gallery';
  const images = [
    {
      largeURL: '/images/new-products/3.png',
      thumbnailURL: '/images/new-products/3.png',
      width: 1920,
      height: 1080,
    },
    {
      largeURL: 'https://via.placeholder.com/1920x1080/FF0000',
      thumbnailURL: 'https://via.placeholder.com/150/FF0000',
      width: 1920,
      height: 1080,
    },
    {
      largeURL: 'https://via.placeholder.com/1920x1080/00FF00',
      thumbnailURL: 'https://via.placeholder.com/150/00FF00',
      width: 1920,
      height: 1080,
    },
  ];

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={`static-gallery-${index}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image.thumbnailURL}
            alt={`Thumbnail ${index + 1}`}
            className="gallery-thumbnail"
          />
        </a>
      ))}
    </div>
  );
};

export default SimpleGallery;


