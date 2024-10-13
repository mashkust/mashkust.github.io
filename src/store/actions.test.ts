/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from "vitest";
import {
  NotesSlice,
  deleteNote,
  setModalOpen,
  editList,
  editNote,
} from "./notesSlice";
import {
  MOCK_INITIAL_STATE,
  MOCK_NOTES_EDITED_LIST,
  MOCK_NOTE_1,
  MOCK_NOTE_2,
  MOCK_NOTE_2_EDITED,
  MOCK_NOTE_2_TODOLIST_EDITED,
} from "../shared/mock";

describe("Actions store", () => {
  it("deleteNote", function () {
    expect(
      NotesSlice.reducer(MOCK_INITIAL_STATE, deleteNote(MOCK_NOTE_2.id))
    ).toEqual({
      ...MOCK_INITIAL_STATE,
      notes: [MOCK_NOTE_1],
    });
  });

  it("setModalOpen", function () {
    expect(NotesSlice.reducer(MOCK_INITIAL_STATE, setModalOpen(true))).toEqual({
      ...MOCK_INITIAL_STATE,
      modalOpen: true,
    });
  });

  it("editList", function () {
    expect(
      NotesSlice.reducer(
        { ...MOCK_INITIAL_STATE, listOpen: MOCK_NOTE_2.id as string },
        editList(MOCK_NOTE_2_TODOLIST_EDITED)
      )
    ).toEqual({
      ...MOCK_INITIAL_STATE,
      listOpen: MOCK_NOTE_2.id,
      notes: MOCK_NOTES_EDITED_LIST,
    });
  });

  it("editNote", function () {
    expect(
      NotesSlice.reducer(MOCK_INITIAL_STATE, editNote(MOCK_NOTE_2_EDITED))
    ).toEqual({
      ...MOCK_INITIAL_STATE,
      notes: [MOCK_NOTE_1, MOCK_NOTE_2_EDITED],
    });
  });
});
