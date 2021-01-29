import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";
import data from "./discovery_page.json";

describe("App", () => {
  test("should render restaurant sections", () => {
    const component = render(<App />);

    const wrapper = component.container.querySelector(".App");
    expect(wrapper).not.toBeNull;

    const sections = wrapper?.querySelectorAll("section");
    expect(sections?.length).toEqual(data.sections.length);
  });
});
