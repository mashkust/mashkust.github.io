import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { isFirstEntry, localNotes, localPage, NOTES } from "../const";
import { Note, NotesData } from "../type";

// export const fetchNotes = createAsyncThunk("notes/fetchNote", async () => {
//   return fetch(url).then((res) => res.json());
// });

const initial = () => {
  const lsListOpen = localStorage.getItem(localPage);
  const lsNotes = localStorage.getItem(localNotes);

  const listOpen = lsListOpen !== null ? JSON.parse(lsListOpen) : null;
  const notes = lsNotes !== null ? JSON.parse(lsNotes) : NOTES;
  const modalOpen = localStorage.getItem(isFirstEntry) === null;

  return { notes, listOpen, modalOpen };
};

const initialState: NotesData = initial();

export const notesData = createSlice({
  name: "DATA",
  initialState: initialState,
  reducers: {
    editList: (state, action) => {
      const { payload } = action;
      const notes = state.notes;
      notes.forEach((note) => {
        if (state.listOpen === note.id) note.todoList = payload;
      });
    },
    setListOpen: (state, action) => {
      const { payload } = action;
      state.listOpen = payload;
      localStorage.setItem(localPage, JSON.stringify(state.listOpen));
    },
    addNote: (state) => {
      const newNote: Note = {
        id: nanoid(3),
        todoList: [],
        name: "",
      };
      state.notes.push(newNote);
    },
    setModalOpen: (state, action) => {
      const { payload } = action;
      state.modalOpen = payload;
      localStorage.setItem(isFirstEntry, "");
    },
    setDialogOpen: (state, action) => {
      const { payload } = action;
      state.dialogOpen = payload;
    },
    editNote: (state, action) => {
      const { payload } = action;
      const notes = state.notes;
      notes.forEach((note) => {
        if (note.id === payload.id) note.name = payload.name;
      });
    },
    deleteNote: (state, action) => {
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
} = notesData.actions;
