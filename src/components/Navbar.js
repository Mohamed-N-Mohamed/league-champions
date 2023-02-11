import React from "react";

const Navbar = () => {
  return (
    <div className='navbar p-12 md:p-8'>
      <ul className='flex justify-center items-center gap-4 md:justify-start'>
        <li className='text-xl'>Home</li>
        <li className='text-xl'>Champions</li>
        <li className='text-xl'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
