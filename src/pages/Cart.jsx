import{ useContext } from 'react'

import { CartContext } from "../CartContext"
import CartProductCard from '../components/CartProductCard';
import ScrollToTop from '../components/ScrollToTop';

export const Cart = () => {
    
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    const checkout = async () => {
      await fetch ('https://gucci-store-82x5.onrender.com/checkout', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({items:cart.items})
      }).then((response) => {
        return response.json();
      }).then((response) => {
        if(response.url) {
          window.location.assign(response.url);
        }
      })
    }
    return (
      <> <ScrollToTop />
        <div className='flex flex-col  mt-[90px]'>
      <div className="sm:mt-5 mt-5 justify-center">
      

        
        {productsCount > 0 ? 
        <>
        
         <h1 className='text-center text-2xl font-extrabold'>Items in your cart</h1>
         <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-5">
         {cart.items.map((currentProduct, idx)  => (
          <CartProductCard key={idx} id={currentProduct.id} quantity={currentProduct.quantity}> </CartProductCard>
         
         ))}
         </div>
          <br/>
          <div className='flex flex-col items-center justify-center gap-6 '>
         <h1 className='text-center text-xl justify-between font-bold'>Total: ${cart.getTotalCost().toFixed(2)}</h1>
         <button onClick={checkout} className="justify-center items-center w-[200px] h-[55px] gap-2 px-7 py-3 bg-coral-red text-white border-coral-red rounded-full border font-montserrat  text-lg leading-none">
          Purchase Items </button>
          </div>
        </>
        :
          <h1 className='text-center text-2xl font-extrabold mt-10'> There is no items in your cart</h1>
        }
      </div>
      </div>
      </>
  )
}

export default Cart;