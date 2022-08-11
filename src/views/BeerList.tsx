import { useEffect, useState } from "react";
import SingleBeerList from "../components/single-beer-list";
import useBeerAPI from "../hooks/useBeerAPI";

const DEFAULT_PER_PAGE = 4;
const LOAD_MORE = 4;
const BeerList = () => {
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
  const { beers, loading, error } = useBeerAPI({
    per_page: perPage,
    page: 1,
    // beer_name: "punk",
  });

  const handleLoadMore = () => {
    setPerPage(perPage + LOAD_MORE);
  };

  useEffect(() => {
    console.log("beers", beers);
    return () => {
      setPerPage(3);
    };
  }, []);

  return (
    <div>
      <h1>Beer List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {beers?.length > 0 ? (
        <div>
          {beers.map((beer) => (
            <SingleBeerList key={beer.id} beer={beer} />
          ))}
        </div>
      ) : (
        "No beer match"
      )}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default BeerList;
