import type { ImageData, Links } from './types/types';
import { nanoid } from 'nanoid';

export const imagesData: ImageData[] = [
  {
    id: nanoid(),
    image: '/images/image-product-1.jpg',
    imageThumbnail: '/images/image-product-1-thumbnail.jpg',
    imgAlt: 'product 1',
    imgBorder: false,
  },
  {
    id: nanoid(),
    image: '/images/image-product-2.jpg',
    imageThumbnail: '/images/image-product-2-thumbnail.jpg',
    imgAlt: 'product 2',
    imgBorder: false,
  },
  {
    id: nanoid(),
    image: '/images/image-product-3.jpg',
    imageThumbnail: '/images/image-product-3-thumbnail.jpg',
    imgAlt: 'product 3',
    imgBorder: false,
  },
  {
    id: nanoid(),
    image: '/images/image-product-4.jpg',
    imageThumbnail: '/images/image-product-4-thumbnail.jpg',
    imgAlt: 'product 4',
    imgBorder: false,
  },
];

export const Navlinks: Links[] = [
  {
    label: 'collections',
  },
  {
    label: 'men',
  },
  {
    label: 'women',
  },
  {
    label: 'about',
  },
  {
    label: 'contact',
  },
];
