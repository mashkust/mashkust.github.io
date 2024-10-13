export type Todo = {
  id: string;
  name: string;
  description?: string;
  selected?: boolean;
  rating?: number;
  isNew: boolean;
};

export type TextFields = {
  title: string;
};

export type Note = {
  id: string;
  name?: string;
  todoList?: Todo[];
};

export type NotesData = {
  notes: Note[];
  listOpen: string | null;
  modalOpen?: boolean;
  dialogOpen?: string | null;
  isLoading?: boolean;
};

export interface ModalProps {
  text: {
    title: string;
    description: string;
  };
  style?: string;
}
