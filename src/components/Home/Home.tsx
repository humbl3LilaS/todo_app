import Container from "../Helper/Container.tsx";
import {useGetTodos} from "../../query/query.ts";
import {useTodos} from "../../hook/useTodos.ts";

export default function Home() {
    const {data} = useGetTodos();
    const {upcoming, today, overdue} = useTodos(data ?? []);
    return (
        <Container className={"w-4/5 h-screen"}>
            <h1 className={"pb-3 border-b border-b-stone-600 text-3xl font-bold text-stone-700"}>
                All Todos
            </h1>
            {
                today &&
              <div>
                <h2 className={"pb-3 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Today</h2>
                  {today.map(todo => <p key={todo.todos_details.id}>{todo.todos_details.content}</p>)}
              </div>
            }
            {
                upcoming &&
              <div>
                <h2 className={"pb-3 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Upcoming</h2>
                  {upcoming.map(todo => <p key={todo.todos_details.id}>{todo.todos_details.content}</p>)}
              </div>
            }
            {
                overdue &&
              <div>
                <h2 className={"pb-3 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>Overdue</h2>
                  {overdue.map(todo => <p key={todo.todos_details.id}>{todo.todos_details.content}</p>)}
              </div>
            }

        </Container>
    );
}