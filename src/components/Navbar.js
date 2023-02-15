import React from "react";
import Showcase from "./Showcase";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className='navbar relative text-white  h-[500px]'>
        <div className='navbar-overlay p-12 md:p-8'>
          <ul className='flex justify-center items-center gap-4 md:justify-start'>
            <li className='text-xl'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-xl'>
              <Link to='/champions'>Champions</Link>
            </li>
            <li className='text-xl'>
              <Link to='/contact'>contact</Link>
            </li>
          </ul>
          <Showcase />
        </div>
      </header>
    </>
  );
};

export default Navbar;
