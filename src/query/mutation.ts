import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createTodos} from "./db.ts";
import {TodoDetails} from "../lib/types/database.types.ts";
import {getUserQuery} from "./query.ts";


export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    const {data: userId} = useQuery(getUserQuery());
    return useMutation({
        mutationFn: async (content: TodoDetails["todos_details"]) => createTodos(content, userId ?? ""),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["todos"]});
        },
        onError: async (error) => {
            console.log(error.message);
        }
    });
};