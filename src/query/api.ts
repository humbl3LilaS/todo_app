import {superbase} from "../lib/helper/superbaseClient.ts";
import {TodoDetails} from "../lib/types/database.types.ts";

export const getTodos = async () => {
    const id = await getUser();
    const {
        data,
    } = await superbase
        .from("todos")
        .select(`todos_details(id,content, priority, created_at, finished_at,due_at, is_finish )`)
        .eq("user_id", id);
    return data as unknown as TodoDetails[];
};

const getUser = async () => {
    const session = await superbase.auth.getUser();
    return session.data.user?.id;
}

