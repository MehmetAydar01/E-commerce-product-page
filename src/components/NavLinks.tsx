import { Navlinks } from '@/allData';

const NavLinks = () => {
  return (
    <div className='hidden lg:flex justify-center items-center gap-x-7'>
      {Navlinks.map((link) => {
        return (
          <p
            key={link.label}
            aria-label='navlink'
            className='capitalize font-light tracking-wide cursor-pointer text-lg group relative w-max m-0'
          >
            <span className='text-darkGrayishBlue hover:text-veryDarkBlue'>
              {link.label}
            </span>
            <span className='absolute -bottom-10 left-1/2 w-0 transition-all duration-300 h-[0.20rem] bg-hoverOrange group-hover:w-3/6'></span>
            <span className='absolute -bottom-10 right-1/2 w-0 transition-all duration-300 h-[0.20rem] bg-hoverOrange  group-hover:w-3/6'></span>
          </p>
        );
      })}
    </div>
  );
};

export default NavLinks;
