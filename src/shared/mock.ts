import { Note, NotesData } from "./type";

export const MOCK_NOTE_1: Note = {
  id: "1",
  name: "",
};

export const MOCK_NOTE_2_TODOLIST: Note["todoList"] = [
  {
    id: "0",
    name: "",
    isNew: false,
  },
];

export const MOCK_NOTE_2_TODOLIST_EDITED: Note["todoList"] = [
  {
    id: "0",
    name: "Отредактирован",
    isNew: false,
  },
];

export const MOCK_NOTE_2: Note = {
  id: "2",
  name: "Тест",
  todoList: MOCK_NOTE_2_TODOLIST,
};

export const MOCK_NOTE_2_EDITED: Note = {
  id: "2",
  name: "Отредактирован",
  todoList: MOCK_NOTE_2_TODOLIST,
};

export const MOCK_NOTES: NotesData["notes"] = [MOCK_NOTE_1, MOCK_NOTE_2];

export const MOCK_NOTES_EDITED_LIST: NotesData["notes"] = [
  MOCK_NOTE_1,
  { ...MOCK_NOTE_2, todoList: MOCK_NOTE_2_TODOLIST_EDITED },
];

export const MOCK_INITIAL_STATE: NotesData = {
  notes: MOCK_NOTES,
  listOpen: null,
  modalOpen: false,
};
