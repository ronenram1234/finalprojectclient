import { FunctionComponent, useContext, useEffect } from "react";
// import { getAllCardsFromAPI, GlobalProps } from "../App";
import { getAllCardsFromAPI } from "../utils/cardHelpers";
import { GlobalProps } from "../context/GlobalContext";




import CardsCarousel from "./CardsCarousel";

// interface MainProps {}

const Main: FunctionComponent = () => {
  const { setCardArray,cardArray } = useContext(GlobalProps);
  

  useEffect(() => {

 
    getAllCardsFromAPI(setCardArray);
  }, [setCardArray]);

  return <CardsCarousel carouselCardArray={cardArray  || []} originScreen="Main"/>;
};

export default Main;
