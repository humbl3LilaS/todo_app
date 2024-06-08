import Container from "../Helper/Container.tsx";
import {useGetTodos} from "../../query/query.ts";

export default function Home() {
    const {data} = useGetTodos();
    return (
        <Container className={"w-4/5 h-screen"}>
            <h1 className={"pb-2 border-b border-b-stone-600 text-2xl font-bold text-stone-700"}>
                All Todos
            </h1>
            <div>
                {data && data.map(todo => <h2 key={todo.todos_details.id}>{todo.todos_details.content}</h2>)}
            </div>
        </Container>
    );
}