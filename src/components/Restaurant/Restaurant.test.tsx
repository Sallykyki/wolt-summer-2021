import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Restaurant from "./Restaurant";
import data from "../../discovery_page.json";

describe("Restaurant", () => {
  test("should render an open restaurant", () => {
    const restaurant = data.sections[0].restaurants[0];
    const component = render(<Restaurant restaurant={restaurant} />);

    const wrapper = component.container.querySelector(".component-Restaurant");
    expect(wrapper).not.toBeNull();

    const imageWrapper = wrapper?.querySelector(".component-Restaurant__image");
    expect(imageWrapper).not.toBeNull();

    const imageCanvas = imageWrapper?.querySelector("canvas");
    expect(imageCanvas).not.toBeNull();

    const bodyWrapper = component.container.querySelector(
      ".component-Restaurant__body"
    );
    expect(bodyWrapper).not.toBeNull();

    const name = bodyWrapper?.querySelector(
      ".component-Restaurant__body__name"
    );
    expect(name).not.toBeNull();
    expect(name).toHaveTextContent(restaurant.name);

    const open = bodyWrapper?.querySelector(
      ".component-Restaurant__body__status--open"
    );
    expect(open).not.toBeNull();
    expect(open).toHaveTextContent("Open now");

    const closed = bodyWrapper?.querySelector(
      ".component-Restaurant__body__status--closed"
    );
    expect(closed).toBeNull();
  });

  test("should render a closed restaurant", () => {
    const restaurant = data.sections[0].restaurants[9];
    const component = render(<Restaurant restaurant={restaurant} />);

    const wrapper = component.container.querySelector(".component-Restaurant");
    expect(wrapper).not.toBeNull();

    const imageWrapper = wrapper?.querySelector(".component-Restaurant__image");
    expect(imageWrapper).not.toBeNull();

    const imageCanvas = imageWrapper?.querySelector("canvas");
    expect(imageCanvas).not.toBeNull();

    const bodyWrapper = component.container.querySelector(
      ".component-Restaurant__body"
    );
    expect(bodyWrapper).not.toBeNull();

    const name = bodyWrapper?.querySelector(
      ".component-Restaurant__body__name"
    );
    expect(name).not.toBeNull();
    expect(name).toHaveTextContent(restaurant.name);

    const closed = bodyWrapper?.querySelector(
      ".component-Restaurant__body__status--closed"
    );
    expect(closed).not.toBeNull();
    expect(closed).toHaveTextContent("Closed");

    const open = bodyWrapper?.querySelector(
      ".component-Restaurant__body__status--open"
    );
    expect(open).toBeNull();
  });
});
