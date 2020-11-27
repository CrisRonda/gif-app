const { getGifs } = require("../../helpers/getGifs");

describe("test on getGifts", () => {
  test("should get 10 elements", async () => {
    const limit = 10;
    const category = "Goku";
    const gifs = await getGifs({ category, limit });
    expect(gifs.length).toBe(limit);
  });

  test("should get 0 elements", async () => {
    const limit = 10;
    const category = "";
    const gifs = await getGifs({ category, limit });
    expect(gifs.length).toBe(0);
  });
});
