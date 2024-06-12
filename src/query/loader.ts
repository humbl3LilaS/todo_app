import {getUserQuery} from "./query.ts";
import {QueryClient} from "@tanstack/react-query";

export const userLoader = (queryClient: QueryClient) => async () => {
    const query = getUserQuery();
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    );
};