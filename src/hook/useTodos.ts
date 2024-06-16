import {TodoDetails} from "../lib/types/database.types.ts";


type UseTodosOptions = {
    select: "unfinished" | "finished" | "all";
}

// TODO: refactor later to be able used across multiple route
export const useTodo = (data: TodoDetails[], options: UseTodosOptions) => {
    switch (options?.select) {
        case "unfinished":
            return data.filter(todo => todo.todos_details.is_finish === false);
        case "finished" :
            return data.filter(todo => todo.todos_details.is_finish === true);
        case    "all" :
            return data;
    }
};



