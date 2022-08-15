import React, { createContext, useState } from "react";
import { Beer } from "../models/beer";

const defaultBeerList: Beer[] = [];
type BeerContextType = {
  beerList: Beer[];
  setBeerList: React.Dispatch<React.SetStateAction<Beer[]>>;
};
const defaultBeerContext: BeerContextType = {
  beerList: defaultBeerList,
  setBeerList: () => {},
};
const BeerContext = createContext<BeerContextType>(defaultBeerContext);

interface BeerProviderProps {
  children: React.ReactNode;
}
export const BeerProvider: React.FC<BeerProviderProps> = ({ children }) => {
  const [beerList, setBeerList] = useState<Beer[]>(defaultBeerList);

  return (
    <BeerContext.Provider value={{ beerList, setBeerList }}>
      {children}
    </BeerContext.Provider>
  );
};

export const useBeerContext = () => React.useContext(BeerContext);

export default BeerProvider;
