import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { MODAL_KEY, NOTES_KEY, PAGE_KEY, NOTES } from "../shared/const.ts";
import { Note, NotesData } from "../shared/type.ts";
import { getJsonLs, setJsonLs } from "../utils/ls.ts";

// export const fetchNotes = createAsyncThunk("notes/fetchNote", async () => {
//   return fetch(url).then((res) => res.json());
// });

const initial = () => {
  const listOpen = getJsonLs(PAGE_KEY);
  const notes = getJsonLs<Note[]>(NOTES_KEY, NOTES);
  const modalOpen = getJsonLs(MODAL_KEY) === null;

  return { notes, listOpen, modalOpen };
};

const initialState: NotesData = initial();

export const NotesSlice = createSlice({
  name: "DATA",
  initialState: initialState,
  reducers: {
    editList: (state, action: PayloadAction<Note["todoList"]>) => {
      const { payload } = action;
      const notes = state.notes;
      notes.forEach((note) => {
        if (state.listOpen === note.id) note.todoList = payload;
      });
    },
    setListOpen: (state, action: PayloadAction<NotesData["listOpen"]>) => {
      const { payload } = action;
      state.listOpen = payload;
      setJsonLs<NotesData["listOpen"]>(PAGE_KEY, state.listOpen);
    },
    addNote: (state) => {
      const newNote: Note = {
        id: nanoid(3),
        todoList: [],
        name: "",
      };
      state.notes.push(newNote);
    },
    setModalOpen: (state, action: PayloadAction<NotesData["modalOpen"]>) => {
      const { payload } = action;
      state.modalOpen = payload;
      setJsonLs<string>(MODAL_KEY, "");
    },
    setDialogOpen: (state, action: PayloadAction<NotesData["dialogOpen"]>) => {
      const { payload } = action;
      state.dialogOpen = payload;
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { payload } = action;
      const notes = state.notes;
      notes.forEach((note) => {
        if (note.id === payload.id) note.name = payload.name;
      });
    },
    deleteNote: (state, action: PayloadAction<Note["id"]>) => {
      const { payload } = action;
      const notes = state.notes;
      state.notes = notes.filter((note) => note.id !== payload);
    },
  },
});

export const {
  editList,
  addNote,
  editNote,
  deleteNote,
  setListOpen,
  setModalOpen,
  setDialogOpen,
} = NotesSlice.actions;
