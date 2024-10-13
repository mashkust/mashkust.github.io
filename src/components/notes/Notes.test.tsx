/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { render } from "../../utils/test-utils";
import { screen, fireEvent } from "@testing-library/react";
import { setupStore } from "../../store/store";
import Notes from "./Notes";
import {
  MOCK_INITIAL_STATE,
  MOCK_NOTE_2,
  MOCK_NOTE_2_EDITED,
} from "../../shared/mock";

describe("Notes component", async () => {
  const setup = () => {
    const utils = render(<Notes />);
    const input = screen.getByDisplayValue(String(MOCK_NOTE_2.name));
    return {
      input,
      ...utils,
    };
  };

  const store = setupStore(MOCK_INITIAL_STATE);

  render(<Notes />, {
    store,
  });

  it("add note", async function async() {
    expect(store.getState().notes.length).toBe(2);
    fireEvent.click(screen.getByTestId("add-note"));
    expect(store.getState().notes.length).toBe(3);
    fireEvent.click(screen.getByTestId("add-note"));
    expect(store.getState().notes.length).toBe(4);
  });

  it("change name", async function async() {
    const { input } = setup();
    fireEvent.change(input, {
      target: { value: String(MOCK_NOTE_2_EDITED.name) },
    });
    expect(screen.getByDisplayValue(String(MOCK_NOTE_2_EDITED.name)));
  });
});
