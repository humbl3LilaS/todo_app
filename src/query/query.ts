import {useQuery} from "@tanstack/react-query";
import {getTodos} from "./api.ts";

export function useGetTodos() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodos,
        staleTime: 60 * 60 * 60,
    });
}