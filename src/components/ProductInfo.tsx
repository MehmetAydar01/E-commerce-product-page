import { useAppDispatch, useAppSelector } from '@/hooks';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { CartIcon } from './icons';
import { Button } from './ui/button';
import {
  increaseProductAmount,
  decreaseProductAmount,
  addToCart,
} from '@/features/cart/cartSlice';
import { CartItem } from '@/types/types';
import { imagesData } from '@/allData';
import { useToast } from '@/components/ui/use-toast';

const ProductInfo = () => {
  const { discountedPrice, totalAmount, totalPrice, cartItems } =
    useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const cartItemObj: CartItem = {
    id: '0UH4lQOas8BK2ZB4wH0W1',
    discountedPrice: Number(discountedPrice.toFixed(2)),
    title: 'fall limited edition sneakers'
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' '),
    imageThumbnail: imagesData[0].imageThumbnail,
    cartTotalAmount: totalAmount,
    cartTotalPrice: totalPrice,
  };

  return (
    <div className='sm:flex flex-col max-w-lg w-full py-12 px-6 sm:pl-12 sm:pr-0'>
      <h3 className='uppercase text-xs tracking-widest text-darkGrayishBlue font-bold mb-5'>
        sneaker company
      </h3>
      <h1 className='capitalize text-4xl tracking-wider font-bold mb-8 text-veryDarkBlue leading-tight'>
        fall limited edition sneakers
      </h1>
      <p className='text-darkGrayishBlue leading-7 mb-6'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p className='inline-flex sm:flex sm:justify-start sm:items-center gap-x-5 mb-3'>
        <span className='text-3xl font-bold'>
          ${discountedPrice.toFixed(2)}
        </span>
        <span className='text-center px-2 mt-2 font-semibold rounded-md bg-veryDarkBlue text-pureWhite'>
          50%
        </span>
      </p>
      <p className='mb-7 inline-flex ml-14 sm:ml-0 sm:block'>
        <span className='line-through font-semibold text-darkGrayishBlue'>
          $250.00
        </span>
      </p>
      <div className='flex items-center justify-start flex-col sm:flex-row gap-x-5'>
        <div className='mb-4 sm:mb-0 flex items-center justify-center rounded-lg bg-lightGrayishBlue w-full sm:w-72 h-12 opacity-80'>
          <MinusIcon
            className='text-hoverOrange opacity-70 cursor-pointer hover:opacity-100 mr-8 font-bold'
            onClick={() => {
              if (totalAmount <= 0) {
                return;
              }
              dispatch(decreaseProductAmount());
            }}
          />
          <span className='font-bold'>{totalAmount}</span>
          <PlusIcon
            className='text-hoverOrange opacity-70 cursor-pointer hover:opacity-100 ml-8 font-bold'
            onClick={() => {
              if (totalAmount >= 15) {
                return;
              }
              dispatch(increaseProductAmount());
            }}
          />
        </div>
        <Button
          className='h-12 gap-x-2 bg-hoverOrange text-veryDarkBlue hover:opacity-80 font-bold w-full rounded-lg'
          onClick={() => {
            if (totalAmount > 0) {
              if (cartItems[0]?.cartTotalAmount >= 40) {
                toast({
                  title: 'Do not exceed the product limit',
                  variant: 'destructive',
                });
                return;
              }
              dispatch(addToCart({ cart: cartItemObj }));
              toast({ title: 'product added to cart' });
            }
          }}
        >
          <CartIcon /> Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
