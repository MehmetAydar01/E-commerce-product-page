import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { AlignLeft } from 'lucide-react';
import { Navlinks } from '@/allData';

const LinksSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon' className='border-0 border-none'>
          <AlignLeft />
          <span className='sr-only'>Toggle Links</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-56 lg:hidden flex flex-col pt-20 mt-4'
      >
        {Navlinks.map((link) => {
          return (
            <SheetHeader className='text-left' key={link.label}>
              <SheetTitle
                className='capitalize w-full cursor-pointer hover:text-darkGrayishBlue transition-all duration-300'
                key={link.label}
              >
                {link.label}
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default LinksSheet;
