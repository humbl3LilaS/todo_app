import {useQuery} from "@tanstack/react-query";
import {getTodos, getUser} from "./db.ts";

export function useGetTodosQuery(userId: string) {
    return useQuery({
        queryKey: ["todos"],
        queryFn: () => getTodos(userId),
        staleTime: 60 * 60 * 60,
    });
}

export const getUserQuery = () => ({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 60 * 60 * 365,
});