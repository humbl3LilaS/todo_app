import {Checkbox} from "../ui/checkbox.tsx";
import {TodoDetails} from "../../lib/types/database.types.ts";
import {useState} from "react";
import {useUpdateTodo} from "../../query/mutation.ts";

type Props = {
    data: TodoDetails["todos_details"]
}

export default function TodoItem({data}: Props) {
    const [completed, setCompleted] = useState(data.is_finish);
    const {mutateAsync} = useUpdateTodo();
    const onCheck = async () => {
        setCompleted(prevState => !prevState);
        await mutateAsync({data: {is_finish: !completed}, todoId: data.id});
    };

    return (
        <div className={"mb-4 flex justify-start items-center gap-x-2 last:mb-0"}>
            <Checkbox id={data.id} checked={completed} onClick={onCheck}/>
            <label
                htmlFor={data.id}
                className={"font-medium leading-none text-stone-700"}
            >
                {data.content}
            </label>
        </div>
    );
}