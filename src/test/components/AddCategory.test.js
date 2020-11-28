import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test on AddCategory", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setParams={setCategory} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setParams={setCategory} />);
  });

  test("should show componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should change value on input", () => {
    const input = wrapper.find("#input");
    input.simulate("change", { target: { value: "holi" } });
  });

  test("not should post info", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });

  test("should set input & clear", () => {
    const value = "dark";
    const input = wrapper.find("#input");
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).toHaveBeenCalled();
    input.simulate("change", { target: { value } });
    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(expect.any(Object));
  });
});
