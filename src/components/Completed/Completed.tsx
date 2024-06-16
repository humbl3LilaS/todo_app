import Container from "../Helper/Container.tsx";
import TodoItem from "../Todo/TodoItem.tsx";
import {useQuery} from "@tanstack/react-query";
import {getUserQuery, useGetTodosQuery} from "../../query/query.ts";
import {useTodo} from "../../hook/useTodos.ts";


export default function Completed() {
    //TODO: Refactor the redundant query call and abstract them into one hook later
    const {data: userId} = useQuery(getUserQuery());
    const {data} = useGetTodosQuery(userId ?? "");
    const completedTodo = useTodo(data ?? [], {select: "finished"});
    return (
        <Container>
            <h1 className={"pb-3 border-b border-b-stone-600 text-3xl font-bold text-stone-700"}>
                Completed Todos
            </h1>
            <div className={"mb-4"}>
                {completedTodo.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
            </div>
        </Container>
    );
}