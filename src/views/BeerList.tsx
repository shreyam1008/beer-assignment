import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import SingleBeerList from "../components/single-beer-list";
import useBeerAPI from "../hooks/useBeerAPI";

const DEFAULT_PER_PAGE: number = 4;
const LOAD_MORE: number = 4;
const BeerList = () => {
  const [perPage, setPerPage] = useState<number>(DEFAULT_PER_PAGE);
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
      setPerPage(DEFAULT_PER_PAGE);
    };
  }, []);

  return (
    <div>
      <Header title="Beer List" />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {beers?.length > 0 ? (
        <S.BeerListContainer>
          {beers.map((beer) => (
            <SingleBeerList key={beer.id} beer={beer} />
          ))}
        </S.BeerListContainer>
      ) : (
        "No beer match"
      )}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default BeerList;

const S = {
  BeerListContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  `,
};
