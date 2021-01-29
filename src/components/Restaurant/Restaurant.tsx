import React from "react";
import { IRestaurant } from "../../interfaces";
import { Blurhash } from "react-blurhash";
import "./Restaurant.scss";

interface IProps {
  restaurant: IRestaurant;
}

const Restaurant: React.FunctionComponent<IProps> = (props) => {
  const { restaurant } = props;

  return (
    <div className="component-Restaurant">
      <div className="component-Restaurant__image">
        <Blurhash
          style={{
            width: "100%",
            height: "auto",
            padding: "62.5% 0 0 0",
          }}
          hash={restaurant.blurhash}
        />
      </div>
      <div className="component-Restaurant__body">
        <h2 className="component-Restaurant__body__name">{restaurant.name}</h2>
        <p className="component-Restaurant__body__status">
          {restaurant.online ? (
            <span className="component-Restaurant__body__status--open">
              Open now
            </span>
          ) : (
            <span className="component-Restaurant__body__status--closed">
              Closed
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Restaurant;
