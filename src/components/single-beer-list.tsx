// Styling Imports
import styled from "styled-components";
import { TooltipBox, TooltipCard, TooltipText } from "./tooltip";

import { Beer } from "../models/beer";
import getIngredientsString from "../helpers/ingredientsToString";
import React from "react";
interface SingleListProps {
  beer: Beer;
}

const SingleBeerList = (props: SingleListProps) => {
  const { beer } = props;
  const ingredients = beer.ingredients;

  const ingredientString = React.useMemo(
    () => getIngredientsString(ingredients),
    [ingredients]
  );

  return (
    <S.CardContainer>
      <TooltipCard>
        <TooltipText>
          <S.ImageContainer src={beer.image_url} alt={beer.name} />
        </TooltipText>
        <TooltipBox>
          <p>{ingredientString}</p>
        </TooltipBox>
      </TooltipCard>
      <S.TextContainer>
        <S.BeerName>{beer.name}</S.BeerName>
        <S.Tagline>{beer.tagline}</S.Tagline>
        <S.Description>{beer.description}</S.Description>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default SingleBeerList;

const S = {
  CardContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    margin: 10px 0;
    padding: 10px;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      background-color: #f5f5f5;
    }
  `,
  ImageContainer: styled.img`
    height: 100px;
    width: 100%;
    border-radius: 10px;
    margin-right: 10px;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-left: 10px;
  `,
  BeerName: styled.h2`
    margin-top: 5px;
    margin-bottom: 0px;
  `,

  Tagline: styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: orange;
    margin-top: 5px;
    margin-bottom: 0px;
  `,
  Description: styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    color: #333;
    margin-top: 5px;
    margin-bottom: 0px;
  `,
};
