import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { X } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { closeModal } from '@/features/modal/modalSlice';
import { changeBorderImage, handleImageClick } from '@/features/cart/cartSlice';

const CarouselSlider = () => {
  const { allImagesData } = useAppSelector((store) => store.cart);

  const dispatch = useAppDispatch();

  return (
    <div className='sm:absolute sm:top-0 sm:left-0 sm:w-full sm:min-h-screen sm:z-[100] sm:bg-transparentBlack hidden sm:block'>
      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center justify-end w-[36rem] text-end mb-8'>
          <span onClick={() => dispatch(closeModal())}>
            <X className='text-pureWhite font-bold hover:text-hoverOrange cursor-pointer' />
          </span>
        </div>
        <Carousel>
          <CarouselContent>
            {allImagesData.map((item) => {
              return (
                <CarouselItem key={item.id} className='w-40'>
                  <div className='flex items-center justify-center'>
                    <img
                      src={item.image}
                      alt={item.imgAlt}
                      className='rounded-3xl object-cover w-full h-[30rem]'
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext className='-right-[1rem]' />
          <CarouselPrevious className='-left-[1rem]' />
        </Carousel>
        {/* Thumbnail Images */}
        <section className='flex items-center justify-between mt-8 gap-x-8 z-50'>
          {allImagesData.map(({ id, imageThumbnail, imgAlt, imgBorder }) => {
            return (
              <img
                className={`z-50 rounded-xl object-cover w-24 h-24 hover:opacity-80 cursor-pointer ${
                  imgBorder ? 'border-2 border-hoverOrange' : ''
                }`}
                src={imageThumbnail}
                alt={imgAlt}
                key={id}
                onClick={() => {
                  dispatch(handleImageClick({ id }));
                  dispatch(changeBorderImage({ id }));
                }}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CarouselSlider;
