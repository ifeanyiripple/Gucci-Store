import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../constants';

function CartProduct(props)  {
  const cart = useContext(CartContext)
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div className='flex flex-1 flex-col bg-card items-center m-3 p-3 bg-center bg-cover w-full max-sm:w-full'>
      <h3 className='text-center text-xl font-bold'>{productData.name}</h3>
      <img src={productData.imgURL} alt={productData.name} className='w-[230px] h-[210px]' />
      <p className='text-xl'>{quantity} total</p>
      <p className='text-xl'>${ (quantity * productData.price).toFixed(2) }</p>
      <Button className='text-red font-semibold' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </div>
  )
} 

export default CartProduct;