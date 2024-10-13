/**
 * @vitest-environment jsdom
 */
import { expect, describe, test, vi, afterEach } from "vitest";
import { NOTES_KEY } from "../shared/const";
import { getJsonLs, setJsonLs } from "./ls";
import { MOCK_NOTE_1, MOCK_NOTE_2 } from "../shared/mock";
import { NotesData } from "../shared/type";

describe("Notes service", () => {
  const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  describe("getNotes", () => {
    test("gets notes from LocalStorage", () => {
      setJsonLs<NotesData["notes"]>(NOTES_KEY, [MOCK_NOTE_1]);

      expect(getJsonLs<NotesData["notes"]>(NOTES_KEY)).toStrictEqual([
        MOCK_NOTE_1,
      ]);
      expect(getItemSpy).toHaveBeenCalledWith(NOTES_KEY);
    });
  });

  describe("updateNote", () => {
    test("update Note to LocalStorage", () => {
      setJsonLs<NotesData["notes"]>(NOTES_KEY, [MOCK_NOTE_2]);

      expect(getJsonLs<NotesData["notes"]>(NOTES_KEY)).toStrictEqual([
        MOCK_NOTE_2,
      ]);
    });
  });
});
