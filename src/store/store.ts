import { Todo } from "@/types/api";
import { create } from "zustand";

interface BearState {
  todoForm: Todo;
  setTodoForm: (by: Todo) => void;
}

export const useStore = create<BearState>((set) => ({
  todoForm: {
    id: "",
    description: "",
    title: "",
    completed: false,
  },
  setTodoForm: (by: Todo) => set((state) => ({ todoForm: by })),
}));
