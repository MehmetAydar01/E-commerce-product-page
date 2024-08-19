import { CarouselSlider, Navbar, Product } from './components';
import { Toaster } from '@/components/ui/toaster';
import { useAppSelector } from './hooks';

function App() {
  const { show } = useAppSelector((store) => store.modal);

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
