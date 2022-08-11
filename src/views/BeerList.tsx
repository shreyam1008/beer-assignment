import { useState } from "react";
import useBeerAPI from "../hooks/useBeerAPI";

const BeerList = () => {
  const [perPage, setPerPage] = useState(3);
  const { beers, loading, error } = useBeerAPI({
    per_page: perPage,
    page: 1,
  });
  console.log(beers);

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };
  return (
    <div>
      <h1>Beer List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {beers?.length > 0 ? (
        <div>
          {beers.map((beer) => (
            <div
              key={beer.id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: "1rem",
                padding: "1rem",
                border: "1px solid #ccc",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
              }}
            >
              <img src={beer.image_url} height={70} alt={beer.name} />
              <div>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
              </div>
            </div>
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
