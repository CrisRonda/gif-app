import React from "react";
import { shallow } from "enzyme";
import GiftGridItem from "../../components/GiftGridItem";

describe("test on GiftGridItem", () => {
  const title = "My title.. ";
  const href = "https://localhost/";

  const wrapper = shallow(<GiftGridItem title={title} url={href} />);
  // test("should render GiftGridItem", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  test("should have alt and src on img", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(href);
    expect(alt).toBe(title);
  });

  // test("should have class animate__fadeIn", () => {
  //   const container = wrapper.find("figure");
  //   const { className } = container.props();
  //   expect(className.includes("animate__fadeIn")).toBe(false);
  // });
});
