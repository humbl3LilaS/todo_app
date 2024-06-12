import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTodos} from "./db.ts";
import {TodoDetails} from "../lib/types/database.types.ts";


export const useCreateTodo = (userId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (content: TodoDetails["todos_details"]) => createTodos(content, userId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["todos"]});
        },
        onError: async (error) => {
            console.log(error.message);
        }
    });
};