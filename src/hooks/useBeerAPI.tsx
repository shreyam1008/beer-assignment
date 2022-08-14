import { useEffect, useState } from "react";
import { getBeers } from "../api/beer-api";
import { Beer, BeerRequestParams } from "../models/beer";

const useBeerAPI = (params: BeerRequestParams) => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const parameters = new URLSearchParams(params as any).toString();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchBeer = async () => {
      try {
        const data = await getBeers(parameters, signal);
        setBeers(data);
      } catch (error) {
        setError("Error to get the beer list");
      } finally {
        setLoading(false);
      }
    };
    fetchBeer();
    return () => {
      controller.abort();
    };
  }, [parameters]);

  return { beers, loading, error };
};

export default useBeerAPI;
