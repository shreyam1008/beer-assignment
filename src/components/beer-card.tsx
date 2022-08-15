// Styling Imports
import styled from "styled-components";
import { device } from "../styles/global";
import { TooltipBox, TooltipCard, TooltipText } from "./tooltip";

import { Beer } from "../models/beer";
import getIngredientsString from "../helpers/ingredientsToString";
import React from "react";
interface BeerCard {
  beer: Beer;
}
const BeerCard = (props: BeerCard) => {
  const { beer } = props;
  const { ingredients, image_url, name, tagline, description } = beer;

  const ingredientString = React.useMemo(
    () => getIngredientsString(ingredients),
    [ingredients]
  );

  return (
    <S.CardContainer>
      <TooltipCard>
        <TooltipText>
          <S.ImageContainer>
            <S.Image src={image_url} alt={name} />
          </S.ImageContainer>
        </TooltipText>
        <TooltipBox>
          {/* change: use styled component */}
          <p>{ingredientString}</p>
        </TooltipBox>
      </TooltipCard>
      <S.TextContainer>
        <S.BeerName>{name}</S.BeerName>
        <S.Tagline>{tagline}</S.Tagline>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default BeerCard;

const S = {
  CardContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 0 10px 10px 10px;
    padding: 25px;
    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
      background-color: #f2f8fd;
    }
  `,
  ImageContainer: styled.div`
    margin: 0 15px 0 20px;
    width: 60px;
    @media ${device.laptop} {
      margin: 0 5px;
    }
    @media ${device.tablet} {
      width: 40px;
      margin: 0;
    }
  `,
  Image: styled.img`
    height: 100px;
    border-radius: 10px;
    @media ${device.tablet} {
      height: 80px;
    }
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
    @media ${device.laptop} {
      margin: 0 0px;
    }
    @media ${device.tablet} {
      margin: 0 15px;
    }
  `,
  BeerName: styled.h2`
    margin-top: 5px;
    margin-bottom: 0px;
  `,

  Tagline: styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: #da9414;
    margin-top: 5px;
    margin-bottom: 0px;
  `,
  Description: styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    color: #333;
    margin-top: 5px;
    margin-bottom: 0px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
};
