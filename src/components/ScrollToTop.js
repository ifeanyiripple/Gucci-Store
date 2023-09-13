import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { shoedetails1, shoedetails2, shoedetails3, shoedetails4,
          clothdetails1, clothdetails2, clothdetails3, clothdetails4,
          details1, details2, details3, details4, cart
        } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [shoedetails1, shoedetails2, shoedetails3, shoedetails4,  cart,
    clothdetails1, clothdetails2, clothdetails3, clothdetails4,  
]);

  return null;
}