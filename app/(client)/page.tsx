import MyHeader from "@/components/my-header";
import MyNewProduct from "@/components/my-new-product";
import Products from "@/components/my-products";
import MyService from "@/components/my-service";
import MySlide from "@/components/my-slide";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* start slide */}
      <MySlide images={[
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
      <MyService/>
      {/* end service */}

    </>
  );
}
