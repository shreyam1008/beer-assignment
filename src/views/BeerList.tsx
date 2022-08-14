import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBeers } from "../api/beer-api";
import Header from "../components/header";
import Loader, { LoadingButton } from "../components/loaders";
import SingleBeerList from "../components/single-beer-list";
import useBeerAPI from "../hooks/useBeerAPI";
import beerLogo from "../assets/images/beer_header.png";

import { device } from "../styles/global";
import { Beer } from "../models/beer";

const BEERS_TO_SHOW_PER_PAGE = 2;
const BeerList = () => {
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let subscribed = true;
    console.log("something");
    const loadData = async () => {
      const parameters = new URLSearchParams({
        per_page: BEERS_TO_SHOW_PER_PAGE,
        page: pageNumber,
      } as any).toString();
      try {
        const beerList = await getBeers(parameters);
        if (subscribed) {
          setBeerList(beerList);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadData();
    return () => {
      subscribed = false;
    };
  }, []);

  const handleLoadMore = async () => {
    console.log("handleLoadMore");
    setIsLoading(true);
    const parameters = new URLSearchParams({
      per_page: BEERS_TO_SHOW_PER_PAGE,
      page: pageNumber + 1,
    } as any).toString();
    try {
      const pageBeerList = await getBeers(parameters);
      setBeerList((previous_beer_list: any) => [
        ...previous_beer_list,
        ...pageBeerList,
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
    setPageNumber((previous_page_number) => previous_page_number + 1);
  };

  if (beerList.length === 0) return;
  <div
    style={
      {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }
    }
  >
    <Loader />;
  </div>;

  return (
    <div>
      <Header title="Beer List" image={beerLogo} />
      <S.BeerListContainer>
        {beerList.map((beer: any) => (
          <SingleBeerList key={beer.id} beer={beer} />
        ))}
      </S.BeerListContainer>
      <S.ButtonContainer>
        {isLoading ? (
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
    &:hover {
      background-color: #f5f5f5;
    }
  `,
};
