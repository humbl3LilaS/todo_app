import {superbase} from "../lib/helper/superbaseClient.ts";
import {TodoDetails} from "../lib/types/database.types.ts";

export const getTodos = async (userId: string) => {
    const {
        data,
    } = await superbase
        .from("todos")
        .select(`todos_details(id,content, priority, created_at, finished_at,due_at, is_finish )`)
        .eq("user_id", userId);
    return data as unknown as TodoDetails[];
};

export const getUser = async () => {
    const session = await superbase.auth.getUser();
    return session.data.user?.id;
};


export const createTodos = async (input: TodoDetails["todos_details"], userId: string) => {
    const {data: detailResponse} = await superbase.from("todos_details")
        .insert({...input})
        .select()
        .single();
    const {data} = await superbase.from("todos").insert({
        user_id: userId,
        todo_id: detailResponse?.id,
    }).select("id").single();
    return detailResponse as TodoDetails["todos_details"];
};


export type UpdateTodo = {
    data: Partial<TodoDetails["todos_details"]>
    todoId: string | undefined;
}
export const updateTodo = async (payload: UpdateTodo) => {
    const {data, error} = await superbase.from("todos_details")
        .update({...payload.data})
        .eq("id", payload.todoId)
        .select();

    console.log(data);
};

