import Container from "../Helper/Container.tsx";
import {getUserQuery, useGetTodosQuery} from "../../query/query.ts";
import {useTodos} from "../../hook/useTodos.ts";
import {useQuery} from "@tanstack/react-query";
import TodoItem from "../Todo/TodoItem.tsx";

export default function Home() {
    const {data: userId} = useQuery(getUserQuery());
    const {data} = useGetTodosQuery(userId ?? "");
    const {upcoming, today, overdue} = useTodos(data ?? []);
    return (
        <Container className={"w-4/5 h-screen"}>
            <h1 className={"pb-3 border-b border-b-stone-600 text-3xl font-bold text-stone-700"}>
                All Todos
            </h1>
            {
                today &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Today</h2>
                <div className={"mb-4"}>
                    {today.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }
            {
                upcoming &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Upcoming</h2>
                <div className={"mb-4"}>
                    {upcoming.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }
            {
                overdue &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>
                  Overdue
                </h2>
                <div>
                    {overdue.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }

        </Container>
    );
}