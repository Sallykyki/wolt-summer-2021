import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Section from "./Section";
import data from "../../discovery_page.json";

describe("Section", () => {
  test("should render list of restaurants", () => {
    const section = data.sections[0];
    const component = render(<Section section={section} />);

    const wrapper = component.container.querySelector(".component-Section");
    expect(wrapper).not.toBeNull();

    const name = wrapper?.querySelector(".component-Section__title");
    expect(name).toHaveTextContent(section.title);

    const carousel = wrapper?.querySelector(".react-multi-carousel-list");
    expect(carousel).not.toBeNull();
  });
});
