import "./single-beer-list.css";

import { Beer } from "../models/beer";
interface SingleListProps {
  beer: Beer;
}

const SingleBeerList = (props: SingleListProps) => {
  const { beer } = props;
  return (
    <div className="card_container">
      <img
        className="image_container"
        src={beer.image_url}
        height={100}
        alt={beer.name}
      />
      <div className="text_container">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
      </div>
    </div>
  );
};

export default SingleBeerList;
