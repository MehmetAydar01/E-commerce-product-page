import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Cart, CartItem } from '@/types/types';
import { imagesData } from '@/allData';

const getCartFromStorage = (): CartItem[] => {
  const storage = localStorage.getItem('cartItem');
  return storage ? JSON.parse(storage) : [];
};

const getTotalAmountFromStorage = (): number => {
  const storage = localStorage.getItem('totalAmount');
  return storage ? JSON.parse(storage) : 0;
};

const initialState: Cart = {
  cartItems: getCartFromStorage(),
  allImagesData: imagesData,
  bigImageSrc: imagesData[0].image,
  discountedPrice: 125,
  totalAmount: getTotalAmountFromStorage(),
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleImageClick: (state, { payload }: PayloadAction<{ id: string }>) => {
      const findImage = state.allImagesData.find(
        (item) => item.id === payload.id
      );

      if (findImage) {
        state.bigImageSrc = findImage.image;
      }
    },
    increaseProductAmount: (state) => {
      state.totalAmount += 1;
      cartSlice.caseReducers.calculatePrice(state);
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    decreaseProductAmount: (state) => {
      state.totalAmount -= 1;
      cartSlice.caseReducers.calculatePrice(state);
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    addToCart: (state, action: PayloadAction<{ cart: CartItem }>) => {
      const { cart } = action.payload;
      const findItem = state.cartItems.find((item) => item.id === cart.id);

      if (findItem) {
        findItem.cartTotalAmount += state.totalAmount;
        findItem.cartTotalPrice += state.totalPrice;
      } else {
        state.cartItems = [cart];
      }

      cartSlice.caseReducers.calculatePrice(state);
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    changeBorderImage: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.allImagesData = state.allImagesData.map((item) => {
        return item.id === payload.id
          ? { ...item, imgBorder: true }
          : { ...item, imgBorder: false };
      });
    },
    checkoutInCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
      state.allImagesData = imagesData;
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    deleteItemInCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
    },
    calculatePrice: (state) => {
      state.totalPrice = state.totalAmount * state.discountedPrice;
    },
  },
});

export const {
  handleImageClick,
  increaseProductAmount,
  decreaseProductAmount,
  addToCart,
  changeBorderImage,
  checkoutInCart,
  deleteItemInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
