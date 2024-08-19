import { LogoIcon } from './icons';
import { LinksSheet, NavLinks, NavCart } from '.';

const Navbar = () => {
  return (
    <nav className='pt-8 sm:py-8'>
      <div className='flex items-center justify-between align-element border-b border-b-lightGrayishBlue lg:px-8 h-24'>
        <div className='flex items-center gap-x-16'>
          {/* Links sheet and logo */}
          <div className='flex items-center gap-x-4'>
            <LinksSheet />
            <LogoIcon />
          </div>
          {/* Nav Links */}
          <NavLinks />
        </div>
        {/* Navbar cart icon and profile photo*/}
        <NavCart />
      </div>
    </nav>
  );
};

export default Navbar;
