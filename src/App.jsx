
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { CustomerReviews, Footer, Hero, PopularShoess, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import { Details1, Details2, Details3, Details4,
   ClothDetails1, ClothDetails2, ClothDetails3, ClothDetails4, ShoeDetails1, ShoeDetails2, ShoeDetails3, ShoeDetails4, Cart
   } from "./pages";
import CartProvider from './CartContext';



const App = () => {
  
  return (
    <CartProvider>
   <main className="relative">
   <BrowserRouter>
   <div className="flex w-full pr-7">
   <Nav/>
   </div>
    
    <div className="">
      <Routes>
      <Route path="/details1" element={<Details1/>} />
      </Routes>
    </div>

    

    <div className="">
      <Routes>
      <Route path="/details2" element={<Details2/>} />
      </Routes>
    </div>
    <div className="">
      <Routes>
      <Route path="/details3" element={<Details3/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/details4" element={<Details4/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/clothdetails1" element={<ClothDetails1/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/clothdetails2" element={<ClothDetails2/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/clothdetails3" element={<ClothDetails3/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/clothdetails4" element={<ClothDetails4/>} />
      </Routes>
    </div>




    <div className="">
      <Routes>
      <Route path="/shoedetails1" element={<ShoeDetails1/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/shoedetails2" element={<ShoeDetails2/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      <Route path="/shoedetails3" element={<ShoeDetails3/>} />
      </Routes>
    </div>

    <div className="">
      <Routes>
      
      <Route path="/shoedetails4" element={<ShoeDetails4/>} />
      </Routes>
    </div>


   <div className="">
    <div className="padding xl:padding-l wide:padding-r padding-b">
      <Routes>
      <Route path="/" element={<Hero/> } />
      </Routes>
    </div>
  
    <div className="padding"> 
      <Routes>
      <Route path="/" element={<PopularShoess/> } />
      </Routes> 
    </div>

   
    <div className="padding">
      <Routes>
      <Route path="/" element={<SuperQuality/>} />
      </Routes>
    </div>


    <div className="sm:px-16 px-8 ">
      <Routes>
      <Route path="/" element={<Services/>} />
      </Routes>
    </div>

    <div className="padding">
      <Routes>
      <Route path="/" element={<SpecialOffer/>} />
      </Routes>
    </div>

    <div className="bg-pale-blue ">
      <Routes>
      <Route path="/" element={<CustomerReviews/>} />
      </Routes>
    </div>

    <div className="sm:px-16 px-8 sm:py-10 py-5 w-full ">
      <Routes>
      <Route path="/" element={<Subscribe/>} />
      </Routes>
    </div>

    
    <div className=" bg-black sm:px-16 px-8 padding-t pb-8">
    <Footer/>
    </div>
    </div>
  </BrowserRouter>
  
  </main>
  </CartProvider>
 )
}


export default App;