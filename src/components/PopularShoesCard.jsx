import { Link } from "react-router-dom";
import { star } from "../assets/icons";
import { CartContext } from '../CartContext';
import { useContext } from 'react';



function PopularShoesCard (props)  {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  return (
  
    
    <div className='flex flex-1 flex-col bg-card bg-center bg-cover w-full max-sm:w-full'>
     <Link to={product.Link1} >
      <img src={product.imgURL} alt={product.name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {product.name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        ${product.price}
      </p>
      </Link>
      { productQuantity > 0 ?
      <>
         
         <div className="flex justify-center">
           <button onClick={() => cart.addOneToCart(product.id)} className="flex justify-center items-center w-[25px]  h-[25px] mx-6 m-2 text-2xl text-white border  bg-coral-red focus:border-red">+</button>
           <div className="font-semibold"  > In Cart: {productQuantity}</div> 
           <button onClick={() => cart.removeOneFromCart(product.id)}  className="flex justify-center items-center w-[25px] h-[25px]  mx-6 m-2 text-2xl text-white border bg-coral-red focus:border-red" >-</button>
           <button onClick={() => cart.deleteFromCart(product.id)}  className="text-red font-semibold">Remove</button>
         </div>
         </>
    
      :  <div className="flex justify-center mb-2"> 
      <button onClick={() => cart.addOneToCart(product.id)} className="flex justify-center items-center w-[250px] gap-2 px-7 py-3 bg-coral-red text-white  border-coral-red rounded-full border font-montserrat text-lg leading-none">
         Add to cart  
      </button>
      </div>
     
      }
    
    </div>
    
   
    
    
  );
};

export default PopularShoesCard;
