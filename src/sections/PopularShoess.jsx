import { productsArray, getProductData } from "../constants";
import { PopularShoesCard } from "../components";

const PopularShoess = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Quality </span> Shoes
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Shop from brands that are known for their high-quality products,
          reputation for using high-quality 
        materials and construction techniques.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {productsArray.slice(0,-4).map((product, idx) => (
          <PopularShoesCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularShoess;