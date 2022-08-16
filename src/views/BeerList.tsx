import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { getBeers } from "../api/beer-api";
import Header from "../components/header";
import PageLoader, { LoadingButton } from "../components/loaders";
import beerLogo from "../assets/images/beer_header.svg";

import { device } from "../styles/global";
import BeerCard from "../components/beer-card";
import { useBeerContext } from "../context/beerContext";
import createURLSearchParams from "../helpers/createURLSearchParams";

const BEERS_TO_SHOW_PER_PAGE = 4;
const DEFAULT_PAGE = 1;

const BeerList = () => {
  const { beerList, setBeerList } = useBeerContext();
  const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(
    async ({ pageNumber }: { pageNumber: number }) => {
      let beerList = [];
      setIsLoading(true);
      const parameters = createURLSearchParams({
        per_page: BEERS_TO_SHOW_PER_PAGE,
        page: pageNumber,
      });
      try {
        beerList = await getBeers(parameters);
      } catch (e) {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
      return beerList;
    },
    [setIsLoading]
  );

  useEffect(() => {
    (async () => {
      const beerList = await loadData({ pageNumber });
      setBeerList(beerList);
    })();
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    const pageBeerList = await loadData({ pageNumber: pageNumber + 1 });
    setBeerList((previous_beer_list) => [
      ...previous_beer_list,
      ...pageBeerList,
    ]);
    setPageNumber((previous_page_number) => previous_page_number + 1);
  };

  if (beerList.length === 0 && isLoading) return <PageLoader />;

  return (
    <div>
      <Header title="Beer List" image={beerLogo} />
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <S.BeerListContainer>
            {beerList.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
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
        </>
      )}
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
