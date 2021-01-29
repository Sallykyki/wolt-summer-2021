import React from "react";
import { IRestaurant } from "../../interfaces";
import { Blurhash } from "react-blurhash";

interface IProps {
  restaurant: IRestaurant;
}

const Restaurant: React.FunctionComponent<IProps> = (props) => {
  const { restaurant } = props;
  return (
    <div>
      <p> {restaurant.name}</p>
      <Blurhash hash={restaurant.blurhash} width={480} height={270} />
    </div>
  );
};

export default Restaurant;
