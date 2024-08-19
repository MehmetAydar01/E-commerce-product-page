import { MainCarousel, ProductImages, ProductInfo } from '.';

const Product = () => {
  return (
    <main className='px-0 flex items-center flex-col lg:flex-row gap-x-12 align-element md:px-16 my-0 sm:my-10 min-h-[calc(100vh-240px)]'>
      <MainCarousel />
      <ProductImages />
      <ProductInfo />
    </main>
  );
};

export default Product;
