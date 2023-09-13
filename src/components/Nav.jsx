import  { useState, useContext } from "react";
import {  menu, close, carticon } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../CartContext';
import { getProductData } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (

    <header className=' topbar py-8 fixed w-full '>
      <nav className='flex  justify-between '>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={65}
            height={55}
            
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 z-20 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-white z-20'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
   <div className=" flex  gap-5 justify-end">
        <div className='flex flex-row'>
         <Link to="cart">
          <img 
           src={carticon}
           alt='cart icon' 
           width={35}
           height={35} 
          
           /></Link>
          <div className="rounded-full z-10  w-[13px] h-[13px] justify-center text-center bg-red text-xs">{productsCount}</div>
         </div>
     
      
         <div className='z-20 hidden max-lg:block '>
          <img 
           src={toggle ? close : menu}
           alt='menu icon' 
           width={35}
           height={35} 
           onClick={() => setToggle(!toggle)}
           className="z-20"
           />
  </div>
         <div
            className={`${
              !toggle ? "hidden" : "flex z-20"
            } bg-primary  bg-cover bg-center absolute right-0 mx-10 my-2 min-w-[140px] z-20 rounded-xl`}
          >
       <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                onClick={() => setToggle(!toggle)}
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
            
          ))}
        </ul>
        </div>



        </div>

      </nav>
    </header>
   

  );
};

export default Nav;
