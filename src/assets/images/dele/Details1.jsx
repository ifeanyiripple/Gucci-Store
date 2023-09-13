
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { Link, useNavigate } from 'react-router-dom';
import  Button   from '../components/Button'
import  Details2  from "./Details2";
 const Details1 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/details2');
  return (
    <>
      <div className="sm:mt-0 mt-5 mb-10">
      <Link to="/">
        <Button label="Go Back" onClick={() => navigate(-1)}/>
        </Link>
        
      </div>
    <div
      className='flex justify-between items-center max-lg:flex-col gap-5 w-full max-container'
      >
         <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
        <img
          src={shoe4}
          alt='product detail'
          width={550}
          height={400}
          className='object-contain'
        />
      </div>
     <div className='flex flex-1 flex-col'>
       
        <h4 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>Gucci Red Air Jordan
          <span className='text-coral-red'> Sneakers Shoes  </span> 
        </h4>
        <p className='text1'>
         Price: <span className='text2'>$200.20 </span> 
        </p>

        <p className='text1'>
         Size: <span className='text2'>39.5 IT </span> 
        </p>

        <p className='text1'>
         Material: <span className='text2'>Cloth </span> 
        </p>
        <p className='text1'>
         Color: <span className='text2'>Brown </span> 
        </p>
        <p className='text1'>
        Categories: <span className='text2'>Men </span> 
        </p>
        
        <p className='text1'>
        Designer: <span className='text2'>Gucci </span> 
        </p>
         

       </div>  
    </div>
    
<div className=" flex flex-col ">
<p className='mt-4  info-text'>
GREAT GIFT IDEAS: Suitable for Women/Men/Girl/Boy. It’s a good gift for special occasions such as Christmas, birthday, celebration, housewarming gift and so on.
        <br/><br/>
        100% SATISFACTION GUARANTEE: If you are not happy with our product, please feel free to contact us, we will give the best solution to you within 24 hours.
<br/> <br/>  Production time: 3 – 5 working days average after payment and all designs updated correctly.
</p>
</div>
   

    <div className="flex flex-1 flex-row gap-5 mt-10">
    
    <div  className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
    
        <button  onClick={handleClick}> 
        <Link to="details2">   
        <img
          src={shoe5}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        /></Link> 
        </button>
      
      </div>
      
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
        <img
          src={shoe6}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        />
      </div>
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
        <img
          src={shoe7}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        />
      </div>
      </div>
    </>
  )
}

export default Details1;