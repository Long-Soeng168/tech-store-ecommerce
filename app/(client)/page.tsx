import MyNewProduct from "@/components/my-new-product";
import Products from "@/components/my-products";
import MyService from "@/components/my-service";
import MySlide from "@/components/my-slide";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* start slide */}
      <MySlide 
      className='aspect-[26/6] w-full object-cover'
       images={[
        "/images/slides/slide1.png",
        "/images/slides/slide2.png",
        "/images/slides/slide3.png",
      ]} />
      {/* end slide */}

      {/* start new product */}
      <MyNewProduct />
      {/* end new product */}

      {/* start products */}
      <Products />
      {/* end products */}

      {/* start service */}
      {/* <MyService/> */}
      {/* end service */}

    </div>
  );
}
