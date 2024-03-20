import React, { useState, useEffect } from 'react';
import Headroom  from 'react-headroom';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Headroom>
    <nav className={`w-full fixed top-0 bg-black text-white transition-all duration-300 ${visible ? '' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBczZrt5J7UOjBPPBz_6O0mtHUz75XVOkuEw&usqp=CAU"
            alt="Logo"
          />
        </div>
        <div className="flex ">
          <ul className="flex list-none">
            <li className="m-2 hover:bg-white hover:text-black hover:cursor-pointer">Home</li>
            <li className="m-2 ">Contact</li>
            <li className="m-2">Buy Now</li>
            <li className="m-2">Explore</li>
          </ul>
        </div>
      </div>
    </nav>

    </Headroom>
  );
};

export default Navbar;
