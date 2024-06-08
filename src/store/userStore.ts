import {User} from "@supabase/supabase-js";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

type State = {
    user: User | null | undefined;
}

type Action = {
    setUser: (user: User | undefined | null) => void;
}

type UserStore = State & Action;

export const useUser = create<UserStore>()(
    immer((set) => ({
        user: null,
        setUser: (user) => set((state) => {
            state.user = user;
        })
    }))
);