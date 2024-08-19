import { CartIcon, DeleteIcon } from './icons';
import ImageAvatar from '@/assets/image-avatar.png';
import { Badge } from './ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { checkoutInCart, deleteItemInCart } from '@/features/cart/cartSlice';

const NavCart = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  return (
    <div className='flex items-center justify-center text-center gap-x-2 md:gap-x-10'>
      <Popover>
        <PopoverTrigger asChild>
          <div className='relative w-10 flex justify-center items-center'>
            <CartIcon />
            <Badge className='text-pureWhite bg-hoverOrange absolute right-0 -top-2 h-4 px-2 py-2 cursor-pointer'>
              {cartItems[0]?.cartTotalAmount || 0}
            </Badge>
          </div>
        </PopoverTrigger>
        <PopoverContent className='mt-10 min-h-56 w-[90vw] max-w-96 rounded-lg px-0 mr-5 ml-2 sm:ml-0 sm:mr-0 sm:mt-6 border-none'>
          <div className='border-b border-lightGrayishBlue pt-1 pb-6 w-full'>
            <h2 className='capitalize text-veryDarkBlue text-lg font-bold mx-6'>
              cart
            </h2>
          </div>
          {cartItems[0]?.cartTotalAmount > 0 ? (
            <div className='flex flex-col items-start h-auto p-6 pb-3 w-full'>
              <div className='flex items-center'>
                <div>
                  <img
                    src={cartItems[0].imageThumbnail}
                    alt={cartItems[0].title}
                    className='rounded object-cover w-20 h-14'
                  />
                </div>
                <div className='flex flex-col text-darkGrayishBlue ml-4'>
                  <h3 className='mb-1'>{cartItems[0].title}</h3>
                  <p>
                    ${cartItems[0].discountedPrice.toFixed(2)}&nbsp;x&nbsp;
                    {cartItems[0].cartTotalAmount}
                    <span className='ml-2 font-bold' style={{ color: 'black' }}>
                      ${cartItems[0].cartTotalPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div
                  className='ml-5'
                  onClick={() => {
                    dispatch(deleteItemInCart());
                    toast({
                      title: 'The product was deleted from the cart',
                    });
                  }}
                >
                  <DeleteIcon />
                </div>
              </div>
              <Button
                className='h-12 bg-hoverOrange text-veryDarkBlue hover:opacity-80 font-bold w-full rounded-lg mt-6'
                onClick={() => {
                  dispatch(checkoutInCart());
                  toast({
                    title: 'checkout made successfully',
                  });
                }}
              >
                Checkout
              </Button>
            </div>
          ) : (
            <div className='h-36 flex items-center justify-center'>
              <span className='text-darkGrayishBlue font-bold opacity-95'>
                Your cart is empty.
              </span>
            </div>
          )}
        </PopoverContent>
      </Popover>
      <img
        src={ImageAvatar}
        alt='image avatar'
        className='inline-block w-8 h-8 md:w-14 md:h-14 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-hoverOrange'
      />
    </div>
  );
};
export default NavCart;
