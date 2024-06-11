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
};


export const createTodos = async (input: TodoDetails["todos_details"]) => {
    const id = await getUser();
    const {data: detailResponse, status} = await superbase.from("todos_details").insert({...input}).select("id");

    console.log(detailResponse);
    if (status === 201 && detailResponse) {
        const {data: response} = await superbase.from("todos").insert({
            user_id: id,
            todo_id: detailResponse[0].id,
        });
        console.log(response);
    }
};

