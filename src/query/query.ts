import {useQuery} from "@tanstack/react-query";
import {getTodos} from "./db.ts";

export function useGetTodos() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodos,
        staleTime: 60 * 60 * 60,
    });
}