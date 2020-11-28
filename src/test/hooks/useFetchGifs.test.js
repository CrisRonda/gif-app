import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test on hook", () => {
  test("should return state on hook", async () => {
    const state = { category: "", limit: 0 };
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(state));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(false);
  });

  test("should return array img", async () => {
    const state = { category: "Goku", limit: 4 };
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(state));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(state.limit);
    expect(loading).toBe(false);
  });
});
