import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useAppSelector } from '@/hooks';

const MainCarousel = () => {
  const { allImagesData } = useAppSelector((store) => store.cart);

  return (
    <div className='block sm:hidden'>
      <Carousel>
        <CarouselContent>
          {allImagesData.map((item) => {
            return (
              <CarouselItem key={item.id} className='w-full'>
                <div className='flex items-center justify-center'>
                  <img
                    src={item.image}
                    alt={item.imgAlt}
                    className='object-cover w-full'
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext className='right-[1rem]' />
        <CarouselPrevious className='left-[1rem]' />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
