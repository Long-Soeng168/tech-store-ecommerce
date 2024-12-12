// pages/product/[id].js
import MyProductList from '@/components/my-product-list';
import MyProductListHeader from '@/components/my-product-list-header';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import MyGallery from '@/components/my-gallery';


const ProductDetailPage = () => {

  // Sample product data (Replace with your API call or props)
  const product = {
    id: 1,
    name: "Lenovo ThinkPad E14 G6 (Ultra 5 125U / 16GB / SSD 512GB M2 PCIe / 14\" FHD+)",
    description:
      "A premium laptop that combines performance, portability, and security for your everyday tasks.",
    price: 819.0,
    image: "/images/new-products/2.png", // Replace with your image path
    brand: "LENOVO",
    productCode: "E14 Gen 6",
    features: [
      "AMD Ryzen 5 5625U",
      "16GB DDR4 RAM",
      "512GB SSD Storage",
      "14\" FHD+ Display",
      "Windows 11 Pro",
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 p-6 flex flex-col items-center">
            <MyGallery />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-base text-gray-500 mt-2">Brand: {product.brand}</p>
            <p className="text-base text-gray-500 mt-2">Category: Computer</p>
            <p className="text-base text-gray-500 mt-2">Product Code: {product.productCode}</p>

            <div className="mt-6 mb-4">
              <p className="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</p>
            </div>
            <Button>
              <ShoppingCart /> Add to Cart
            </Button>
            <hr className='my-10' />
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-700 mb-2">Features:</p>
              <ul className=" text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}> - {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='px-2'>
          <Accordion defaultValue='description' type="single" collapsible>
            <AccordionItem value="description" className='border-none' >
              <AccordionTrigger className='border-b-2 mb-8 hover:no-underline border-primary pb-0'>
                <span className='text-lg text-white font-bold rounded-tl-full rounded-br-full bg-primary px-8 py-1'>Descriptions</span>
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                <div className="product-description">
                  <h1 className="text-2xl font-bold">High-Performance Laptop</h1>
                  <div className="product-image my-4">
                    {/* <img
                      src="/images/slides/slide8.png"
                      alt="High-Performance Laptop"
                      className="rounded-lg shadow-lg"
                    /> */}
                  </div>
                  <div className="product-details text-gray-700">
                    <p className="mb-4">
                      Experience cutting-edge performance with our latest high-performance laptop. Powered by the newest generation Intel Core i7 processor, this laptop is designed for multitasking, gaming, and professional work.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                      <li>Processor: Intel Core i7-13700H</li>
                      <li>Memory: 16GB DDR4 RAM</li>
                      <li>Storage: 512GB NVMe SSD</li>
                      <li>Graphics: NVIDIA GeForce RTX 4060</li>
                      <li>Display: 15.6-inch Full HD (1920x1080) IPS</li>
                      <li>Battery Life: Up to 10 hours</li>
                    </ul>
                    <p className="mb-4">
                      Whether you're editing videos, playing AAA games, or crunching large data sets, this laptop provides the power and reliability you need.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>


        <div>
          <MyProductListHeader title='Related' />
          <MyProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
