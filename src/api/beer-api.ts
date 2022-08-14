import { Beer } from "../models/beer";

const ROOT_ENDPOINT = "https://api.punkapi.com/v2/";

const getBeers = async (params: string, signal?: any) => {
  const response = await fetch(`${ROOT_ENDPOINT}beers?${params}`, { signal });
  return response.json();
};

const getBeer = async (id: number) => {
  const response = await fetch(`${ROOT_ENDPOINT}beers/${id}`);
  return response.json();
};

const getRandomBeer = async (): Promise<Beer[]> => {
  const response = await fetch(`${ROOT_ENDPOINT}beers/random`);
  return response.json();
};

export { getBeers, getBeer, getRandomBeer };
