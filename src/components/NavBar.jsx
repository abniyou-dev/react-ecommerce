import { Link } from 'react-router-dom'
import { FaHome, FaHeart, FaShoppingCart  } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

function NavBar() {

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    console.log('clicked');
    setIsActive(!isActive);
  }
  return (
    <div
      className='relative border-b flex items-center justify-between px-5 py-2'>
        <span
          className='text-red-400 font-bold text-2xl'>E-Store</span>
        <ul
          className='hidden md:flex items-center gap-5 [&>li]:text-xl [&>li]:px-5 
              [&>li]:py-2 [&>li]:text-red-400 [&>li:hover]:bg-red-100
              [&>li]:cursor-pointer [&>li]:rounded'>
          <li><Link to={"/"}><FaHome /></Link></li>
          <li><Link to={"/wishlist"}><FaHeart /></Link></li>
          <li><Link to={"/cart"}><FaShoppingCart /></Link></li>
        </ul>

        <button
          onClick={handleClick}
          className='block md:hidden text-2xl '>
          <IoIosMenu />
        </button>
        {isActive === true && <ul
          className='absolute flex md:hidden flex-col 
              top-0 left-0 w-full h-screen bg-red-200 '>
          <div
            className='flex items-center justify-end p-5'>
            <button
            onClick={() => setIsActive(isActive => !isActive)}
            className='text-1xl border border-red-400 bg-red-100 w-fit p-2 ruoonded text-red-400'>Close</button>
          </div>
          <li 
            onClick={() => setIsActive(isActive => !isActive)}
            className='text-3xl text-red-400 px-3 py-5 border-t'><Link to={"/"}><FaHome /></Link></li>
          <li 
            onClick={() => setIsActive(isActive => !isActive)}
            className='text-3xl text-red-400 px-3 py-5 border-t'><Link to={"/wishlist"}><FaHeart /></Link></li>
          <li 
            onClick={() => setIsActive(isActive => !isActive)}
            className='text-3xl text-red-400 px-3 py-5 border-t'><Link to={"/cart"}><FaShoppingCart /></Link></li>
        </ul>}
    </div>
  )
}

export default NavBar