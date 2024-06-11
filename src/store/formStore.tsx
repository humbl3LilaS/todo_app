import {Rating} from "../lib/types/database.types.ts";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

interface State {
    due: Date | null | undefined;
    priority: Rating | null | undefined;
}

interface Action {
    setDue: (dueDate: State["due"]) => void;
    setPriority: (rating: State["priority"]) => void;
}

type FormStateStore = State & Action;

export const useFormStore = create<FormStateStore>()(
    immer((set) => ({
        due: null,
        priority: null,
        setDue: (dueDate) => set(state => {
            state.due = dueDate;
        }),
        setPriority: (rating) => set(state => {
            state.priority = rating;
        })
    }))
);