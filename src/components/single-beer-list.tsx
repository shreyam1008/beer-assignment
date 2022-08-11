// Styling Imports
import styled from "styled-components";
import { TooltipBox, TooltipCard, TooltipText } from "./tooltip";

// typescript imports
import { Beer } from "../models/beer";
interface SingleListProps {
  beer: Beer;
}

const SingleBeerList = (props: SingleListProps) => {
  const { beer } = props;
  const ingredients = beer.ingredients;

  const ingredientString = `Ingredients: ${
    ingredients.hops.length > 0 ? "hops" : "no hops"
  }${ingredients.malt.length > 0 ? "malt" : "no malt"} ${
    ingredients.yeast ? "yeast" : "no yeast"
  }`;
  return (
    <CardContainer className="card_container">
      <TooltipCard>
        <TooltipText>
          <ImageContainer
            className="image_container"
            src={beer.image_url}
            height={100}
            alt={beer.name}
          />
        </TooltipText>
        <TooltipBox>
          <p>{ingredientString}</p>
        </TooltipBox>
      </TooltipCard>
      <TextContainer className="text_container">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default SingleBeerList;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background-color: #f5f5f5;
  }
`;
const ImageContainer = styled.img`
  border-radius: 10px;
  margin-right: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-left: 10px;

  & > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & > p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;
