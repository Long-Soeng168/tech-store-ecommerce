// pages/product/[id].js
import Image from 'next/image';

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
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain w-full aspect-square"
            />
            <div className="flex gap-4 mt-4">
              <Image
                src={product.image}
                alt="Thumbnail"
                width={80}
                height={80}
                className="border rounded-lg cursor-pointer hover:shadow-lg"
              />
              <Image
                src={product.image}
                alt="Thumbnail"
                width={80}
                height={80}
                className="border rounded-lg cursor-pointer hover:shadow-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mt-2">Brand: {product.brand}</p>
            <p className="text-sm text-gray-500">Product Code: {product.productCode}</p>

            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-700 mb-2">Features:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <label htmlFor="quantity" className="text-gray-700 font-medium">
                Qty
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={1}
                className="border rounded-md w-16 py-1 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="mt-6 bg-yellow-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition-all w-full md:w-auto"
            >
              Add to Cart
            </button>

            <div className="mt-4 text-sm flex items-center gap-4 text-gray-600">
              <button className="flex items-center gap-1 hover:text-gray-800">
                <span>❤️</span> Add to Wish List
              </button>
              <button className="flex items-center gap-1 hover:text-gray-800">
                <span>↔️</span> Compare this Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
