import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test on GifGrid", () => {
  const category = "Goku";
  const limit = 3;
  test("should render compontent", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    let wrapper = shallow(<GifGrid category={category} limit={limit} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render n items when end fetch data", () => {
    const data = [
      {
        id: "123",
        title: "cualquier cosa",
        url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
      },
      {
        id: "123",
        title: "cualquier cosa",
        url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
      },
      {
        id: "123",
        title: "cualquier cosa",
        url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
      },
      {
        id: "123",
        title: "cualquier cosa",
        url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      data,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} limit={limit} />);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GiftGridItem").length).toBe(data.length);
  });
});
