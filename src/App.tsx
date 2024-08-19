import { CarouselSlider, Navbar, Product } from './components';
import { Toaster } from '@/components/ui/toaster';
import { useAppDispatch, useAppSelector } from './hooks';
import { useEffect } from 'react';
import { calculatePrice } from './features/cart/cartSlice';

function App() {
  const { show } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculatePrice());
  }, []);

  return (
    <div>
      <Navbar />
      <Product />
      {show && <CarouselSlider />}
      <Toaster />
    </div>
  );
}

export default App;
