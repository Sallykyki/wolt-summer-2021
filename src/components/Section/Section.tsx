import React from "react";
import { ISection } from "../../interfaces";
import Restaurant from "../Restaurant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Section.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

interface IProps {
  section: ISection;
}

const Section: React.FunctionComponent<IProps> = (props) => {
  const { section } = props;
  return (
    <section className="component-Section">
      <h1 className="component-Section__title">{section.title}</h1>
      <Carousel
        responsive={responsive}
        itemClass="component-Section__carousel__item"
        arrows
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite
        partialVisible
        swipeable={true}
        transitionDuration={500}
      >
        {section.restaurants.map((restaurant, idx) => (
          <Restaurant restaurant={restaurant} key={idx} />
        ))}
      </Carousel>
    </section>
  );
};

export default Section;
