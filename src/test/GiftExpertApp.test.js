import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";

describe("Test on GiftExpertApp", () => {
  test("should render compontent", () => {
    let wrapper = shallow(<GiftExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render items on gifgrid", () => {
    const state = { category: "Goku", limit: 5 };
    let wrapper = shallow(<GiftExpertApp initialState={state} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(1);
  });
});
