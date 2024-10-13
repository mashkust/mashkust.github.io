/**
 * @vitest-environment jsdom
 */
import App from "./App";
import { expect, describe, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "./utils/test-utils";
import { MOCK_INITIAL_STATE } from "./shared/mock";
import setupStore from "./store/store";

describe("App component", () => {
  const store = setupStore(MOCK_INITIAL_STATE);

  render(<App />, {
    store,
  });

  it("footer component", function () {
    expect(screen.queryByTestId("footer")).toBeTruthy();
  });
  it("menu component", function () {
    expect(screen.queryByTestId("menu")).toBeTruthy();
  });
});
