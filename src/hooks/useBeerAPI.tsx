import { useEffect, useState } from "react";
import { getBeers } from "../api/beer-api";
import { Beer, BeerRequestParams } from "../models/beer";

const ROOT_ENDPOINT = "https://api.punkapi.com/v2/";
const useBeerAPI = (params: BeerRequestParams) => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const parameters = new URLSearchParams(params as any).toString();
  console.log(parameters);

  useEffect(() => {
    const fetchBeer = async () => {
      await fetch(`${ROOT_ENDPOINT}beers?${parameters}`)
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
    fetchBeer();
    //   try {
    //     const data = await getBeers(parameters);
    //     setBeers(data);
    //   } catch (error) {
    //     setError("Error to get the beer list");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchBeer();
    return () => {
      setLoading(true);
    };
  }, [parameters]);

  return { beers, loading, error };
};

export default useBeerAPI;
