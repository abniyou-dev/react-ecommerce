import { Link } from 'react-router-dom'
import { FaHome, FaHeart, FaShoppingCart  } from "react-icons/fa";

function NavBar() {
  return (
    <div
      className='border-b flex items-center justify-between px-5 py-2'>
        <span
          className='text-red-400 font-bold text-2xl'>logo</span>
        <ul
          className='flex items-center gap-5 [&>li]:text-xl [&>li]:px-5 
              [&>li]:py-2 [&>li]:text-red-400 [&>li:hover]:bg-red-100
              [&>li]:cursor-pointer [&>li]:rounded'>
          <li><Link to={"/"}><FaHome /></Link></li>
          <li><Link to={"/wishlist"}><FaHeart /></Link></li>
          <li><Link to={"/cart"}><FaShoppingCart /></Link></li>
        </ul>
    </div>
  )
}

export default NavBar