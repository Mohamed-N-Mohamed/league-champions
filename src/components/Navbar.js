import React from "react";
import Showcase from "./Showcase";

const Navbar = () => {
  return (
    <>
      <header className='navbar relative text-white  h-[500px]'>
        <div className='navbar-overlay p-12 md:p-8'>
          <ul className='flex justify-center items-center gap-4 md:justify-start'>
            <li className='text-xl'>Home</li>
            <li className='text-xl'>Champions</li>
            <li className='text-xl'>Contact</li>
          </ul>
          <Showcase />
        </div>
      </header>
    </>
  );
};

export default Navbar;
