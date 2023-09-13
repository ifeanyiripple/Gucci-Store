import { Link, useNavigate } from "react-router-dom";
import { bigshoe11, bigshoe8 } from "../assets/images";
import  Button   from '../components/Button'
import { PopularShoesCard } from "../components";
import { productsArray } from "../constants";

const SuperQuality = () => {
  const navigate = useNavigate();
  return (
    <>
    <div
      id='about-us'
      className='flex justify-between items-center mt-11 mb-11 max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Our
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>3 IN 1 </span> Collections
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        
      </div>

      <div className='flex-1 flex justify-center items-center bg-card bg-center bg-cover'>
        <img
          src={bigshoe11}
          alt='product detail'
          width={450}
          height={500}
          className='object-contain'
        />
      </div> 

    </div>

    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {productsArray.slice(8,12).map((product, idx) => (
          <PopularShoesCard key={idx} product={product} />
        ))}
      </div>

    </>
  ); 
};

export default  SuperQuality;
