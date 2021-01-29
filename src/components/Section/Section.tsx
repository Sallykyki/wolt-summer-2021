import React from "react";
import { ISection } from "../../interfaces";
import Restaurant from "../Restaurant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  section: ISection;
}

const Section: React.FunctionComponent<IProps> = (props) => {
  const { section } = props;
  return (
    <section>
      <h1>{section.title}</h1>
      <Carousel responsive={responsive} infinite={true}>
        {section.restaurants.map((restaurant, idx) => (
          <Restaurant restaurant={restaurant} key={idx} />
        ))}
      </Carousel>
    </section>
  );
};

export default Section;
