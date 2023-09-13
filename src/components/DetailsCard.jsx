import { Link } from "react-router-dom";
import { star } from "../assets/icons";
import { CartContext } from '../CartContext';
import { useContext } from 'react';



function PopularShoesCard (props)  {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  return (
    
    <>
     <div
      className='flex justify-between items-center max-lg:flex-col gap-5 w-full max-container'
      >
         <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
        
      <img 
      src={product.imgURL}  
      alt={product.name} 
      className='w-[500px] h-[400px]' />
      </div>

      <div className='flex flex-1 flex-col gap-1'>
        <h4 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        {product.name}
        </h4>

      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        ${product.price}  </p>

      <p className='text1'>
        Size: <span className='text2'>{product.size}</span> 
        </p>
        <p className='text1'>
        Material:  <span className='text2'>{product.material}</span> 
        </p>
        <p className='text1'>
        Color:  <span className='text2'>{product.color}</span> 
        </p>
        <p className='text1'>
        Categories:  <span className='text2'>{product.categories}</span> 
        </p>

    
    { productQuantity > 0 ?
      <>
         
         <div className="flex justify-center">
           <button onClick={() => cart.addOneToCart(product.id)} className="flex justify-center items-center w-[25px]  h-[25px] mx-6 m-2 text-2xl text-white border  bg-coral-red focus:border-red">+</button>
           <div className="font-semibold"  > In Cart: {productQuantity}</div> 
           <button onClick={() => cart.removeOneFromCart(product.id)}  className="flex justify-center items-center w-[25px] h-[25px]  mx-6 m-2 text-2xl text-white border bg-coral-red focus:border-red" >-</button>
           <button onClick={() => cart.deleteFromCart(product.id)}  className="text-red font-semibold">Remove</button>
         </div>
         </>
    
      :  <div className="flex mt-5"> 
      <button onClick={() => cart.addOneToCart(product.id)} className="flex justify-center items-center w-[450px] h-[60px] gap-2 px-7 py-3 bg-coral-red text-white border-coral-red rounded-full border font-montserrat text-lg leading-none">
         Add to cart  
      </button>
      </div>
     
      }
    
    </div>
    </div>
   </> 
  );
};

export default PopularShoesCard;
