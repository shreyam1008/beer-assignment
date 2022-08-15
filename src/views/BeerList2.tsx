import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import PageLoader, { LoadingButton } from "../components/loaders";
import useBeerAPI from "../hooks/useBeerAPI";
import beerLogo from "../assets/images/beer_header.png";

import { device } from "../styles/global";
import BeerCard from "../components/beer-card";
import { useBeerContext } from "../context/beerContext";
import { Link } from "react-router-dom";

const BEERS_TO_SHOW_PER_PAGE = 2;
const DEFAULT_PAGE = 1;
const BeerList = () => {
  const { beerList, setBeerList } = useBeerContext();
  const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE);
  const { beers, loading, error } = useBeerAPI({
    per_page: BEERS_TO_SHOW_PER_PAGE,
    page: pageNumber,
  });

  useEffect(() => {
    let subscribed = true;
    const loadData = async () => {
      console.log("new beer list", beers);
      if (subscribed) {
        setBeerList((prev) =>
          JSON.stringify(prev) === JSON.stringify(beers)
            ? prev
            : [...prev, ...beers]
        );
      }
    };
    loadData();
    return () => {
      subscribed = false;
    };
  }, [beers]);

  const handleLoadMore = () => {
    setPageNumber((previous_page_number) => previous_page_number + 1);
  };

  if (beerList.length === 0) return <PageLoader />;

  return (
    <div>
      <Link to="/">Home</Link>
      --
      <Link to="/beer">Beer</Link>
      <Header title="Beer List" image={beerLogo} />
      <S.BeerListContainer>
        {beerList.map((beer: any) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </S.BeerListContainer>
      <S.ButtonContainer>
        {loading ? (
          <LoadingButton />
        ) : (
          <S.LoadMoreButton onClick={handleLoadMore}>
            Load More ▼
          </S.LoadMoreButton>
        )}
      </S.ButtonContainer>
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
  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LoadMoreButton: styled.button`
    padding: 10px 20px;
    background-color: white;
    color: #2424d3;
    border: none;
    font-size: 15px;
    font-weight: 600;
    &:hover {
      background-color: #f5f5f5;
    }
  `,
};
