
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { Link, useNavigate,  } from 'react-router-dom';
import { DetailsCard } from "../components";
import { productsArray } from "../constants";
import ScrollToTop from "../components/ScrollToTop";

 const Details2 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/details1', { replace: true});
  const handleClick1 = () => navigate('/details3', { replace: true});
  const handleClick2 = () => navigate('/details4', { replace: true});

  return (
    <section className='max-container mt-[100px] max-sm:mt-12'>
   <> <ScrollToTop />
    <div className="sm:mt-5 mt-[100px] mb-7">
    
      
    </div>

     <div className=' sm:gap-6 gap-14 mb-10'>
        {productsArray.slice(1,-10).map((product, idx) => (
          <DetailsCard key={idx} product={product} />
        ))}
      </div>

      <div className=" flex flex-col ">

      <h1 className='text-start text-3xl font-bold'>Descriptions</h1>
         <p className='mt-5  info-text'>
         GREAT GIFT IDEAS: Suitable for Women/Men/Girl/Boy. It’s a good gift for special occasions such as Christmas, birthday, celebration, housewarming gift and so on.
                  <br/><br/>
                 100% SATISFACTION GUARANTEE: If you are not happy with our product, please feel free to contact us, we will give the best solution to you within 24 hours.
         <br/> <br/>  Production time: 3 – 5 working days average after payment and all designs updated correctly.
         </p>
      </div>

      <h1 className=' mt-5 text-start text-3xl font-bold'>Related Products</h1>
      <div className="flex flex-1 flex-row gap-5 mt-10">
    
    <div  className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
    
    <button  onClick={handleClick}> 
        <Link to="details1"> 
        <img
          src={shoe4}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        /> 
        </Link> 
        </button>
      </div>
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>   
      <button  onClick={handleClick1}> 
        <Link to="details3">  
        <img
          src={shoe6}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        />
        </Link> 
        </button>
      </div>
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
      <button  onClick={handleClick2}> 
        <Link to="details4">
        <img
          src={shoe7}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        />
         </Link> 
        </button>
      </div>
      </div>

      </>
      </section>


   

   
  )
}

export default Details2;