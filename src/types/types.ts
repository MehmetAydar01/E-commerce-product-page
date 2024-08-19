export type ImageData = {
  id: string;
  image: string;
  imageThumbnail: string;
  imgAlt: string;
  imgBorder: boolean;
};

export type CartItem = {
  id: string;
  title: string;
  imageThumbnail: string;
  discountedPrice: number;
  cartTotalPrice: number;
  cartTotalAmount: number;
};

export type Cart = {
  cartItems: CartItem[];
  allImagesData: ImageData[];
  bigImageSrc: string;
  discountedPrice: number;
  totalAmount: number;
  totalPrice: number;
};

export type Links = {
  label: string;
};

export type Modal = {
  show: boolean;
};
