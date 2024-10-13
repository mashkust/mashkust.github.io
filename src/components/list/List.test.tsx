/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { render } from "../../utils/test-utils";
import { screen, fireEvent } from "@testing-library/react";
import { setupStore } from "../../store/store";
import { MOCK_INITIAL_STATE, MOCK_NOTE_2 } from "../../shared/mock";
import List from "./List";

describe("List component", async () => {
  const store = setupStore({ ...MOCK_INITIAL_STATE, listOpen: MOCK_NOTE_2.id });

  render(<List id={MOCK_NOTE_2.id} />, {
    store,
  });

  it("add todo", async function async() {
    expect(store.getState().notes[1].todoList?.length).toBe(1);
    fireEvent.click(screen.getByTestId("add-todo"));
    fireEvent.click(screen.getByTestId("save-todo"));
    expect(store.getState().notes[1].todoList?.length).toBe(2);
  });

  it("cancel todo", async function async() {
    expect(store.getState().notes[1].todoList?.length).toBe(2);
    fireEvent.click(screen.getByTestId("add-todo"));
    fireEvent.click(screen.getByTestId("cancel-todo"));
    expect(store.getState().notes[1].todoList?.length).toBe(2);
  });

  it("delete todo", async function async() {
    expect(store.getState().notes[1].todoList?.length).toBe(2);
    fireEvent.click(screen.getAllByTestId("delete-todo")[0]);
    expect(store.getState().notes[1].todoList?.length).toBe(1);
  });
});
