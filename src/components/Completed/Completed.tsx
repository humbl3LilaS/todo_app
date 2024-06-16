import Container from "../Helper/Container.tsx";
import TodoItem from "../Todo/TodoItem.tsx";
import {useQuery} from "@tanstack/react-query";
import {getUserQuery, useGetTodosQuery} from "../../query/query.ts";
import {useTodo} from "../../hook/useTodos.ts";
import {useGroupedTodoByDate} from "../../hook/useGroupedTodoByDate.ts";


export default function Completed() {
    //TODO: Refactor the redundant query call and abstract them into one hook later
    const {data: userId} = useQuery(getUserQuery());
    const {data} = useGetTodosQuery(userId ?? "");
    const completedTodo = useTodo(data ?? [], {select: "finished"});
    const {
        today,
        yesterday,
        thisWeek,
        lastWeek,
        lastMonth
    } = useGroupedTodoByDate(completedTodo);
    return (
        <Container>
            <h1 className={"pb-3 border-b border-b-stone-600 text-3xl font-bold text-stone-700"}>
                Completed Todos
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
                yesterday &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Yesterday</h2>
                <div className={"mb-4"}>
                    {yesterday.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }
            {
                thisWeek &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>This Week</h2>
                <div className={"mb-4"}>
                    {thisWeek.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }
            {
                lastWeek &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Last Week</h2>
                <div className={"mb-4"}>
                    {lastWeek.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }
            {
                lastMonth &&
              <div>
                <h2 className={"pb-3 mb-4 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Last
                                                                                                          Month</h2>
                <div className={"mb-4"}>
                    {lastMonth.map(todo => <TodoItem key={todo.todos_details.id} data={todo.todos_details}/>)}
                </div>
              </div>
            }


        </Container>
    );
}