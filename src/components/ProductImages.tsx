import { changeBorderImage, handleImageClick } from '@/features/cart/cartSlice';
import { showModal } from '@/features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

const ProductImages = () => {
  const { bigImageSrc, allImagesData } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  return (
    <div className='hidden sm:flex sm:flex-col sm:gap-y-6 sm:max-w-md sm:w-full'>
      <section>
        <img
          src={bigImageSrc}
          alt='shoes img'
          className='rounded-3xl object-cover w-full h-auto cursor-pointer'
          onClick={() => dispatch(showModal())}
        />
      </section>
      <section className='flex items-center justify-between'>
        {allImagesData.map(({ id, imageThumbnail, imgAlt, imgBorder }) => {
          return (
            <img
              className={`rounded-xl object-cover w-24 h-24 hover:opacity-75 cursor-pointer ${
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
  );
};

export default ProductImages;
