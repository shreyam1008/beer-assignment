import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Loader from "../components/loader";
import SingleBeerList from "../components/single-beer-list";
import useBeerAPI from "../hooks/useBeerAPI";
import { Beer } from "../models/beer";

import { device } from "../styles/global";

const DEFAULT_PER_PAGE: number = 4;
const LOAD_MORE: number = 2;
const BeerList = () => {
  const [perPage, setPerPage] = useState<number>(DEFAULT_PER_PAGE);
  const { beers, loading, error } = useBeerAPI({
    per_page: perPage,
    page: 1,
  });

  const handleLoadMore = () => {
    setPerPage(perPage + LOAD_MORE);
  };

  useEffect(() => {
    return () => {
      setPerPage(DEFAULT_PER_PAGE);
    };
  }, []);

  return (
    <div>
      <Header title="Beer List" />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {beers?.length > 0 && (
        <S.BeerListContainer>
          {beers.map((beer) => (
            <SingleBeerList key={beer.id} beer={beer} />
          ))}
        </S.BeerListContainer>
      )}

      <S.LoadMoreButton onClick={handleLoadMore}>Load More ▼</S.LoadMoreButton>
    </div>
  );
};

export default BeerList;

const S = {
  BeerListContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 10px 30px;

    @media ${device.tablet} {
      grid-template-columns: repeat(1, 1fr);
      margin: 10px 10px;
    }
  `,
  LoadMoreButton: styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: white;
    color: #2424d3;
    border: none;
    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  `,
};
