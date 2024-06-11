import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import DatePicker from "../Popup/DatePicker.tsx";
import PrioritySelector from "../Popup/PrioritySelector.tsx";
import {Button} from "../ui/button.tsx";
import {useFormStore} from "../../store/formStore.tsx";
import {createTodos} from "../../query/db.ts";

const AddTodoFormSchema = z.object({
    content: z.string().min(1, {message: "Content should not be empty"}),
});

type AddTodoFormSchemaType = z.infer<typeof AddTodoFormSchema>;

export default function AddTodoForm() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<AddTodoFormSchemaType>({resolver: zodResolver(AddTodoFormSchema)});

    const {due, priority} = useFormStore();

    const onSubmit: SubmitHandler<AddTodoFormSchemaType> = (data) => {
        console.log(data);
        console.log(due);
        console.log(priority);
        createTodos({
            due_at: due ? due : null,
            content: data.content,
            priority: priority ? priority : null,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor={"content"}>
                    content
                </label>
                <textarea id={"content"} {...register("content")}/>
                {errors.content && <h1>Content shouldn't be empty</h1>}
            </div>
            <div>
                <label htmlFor={"due_at"}>
                    Due
                </label>
                <DatePicker/>
            </div>
            <div>
                <label>
                    Priority
                </label>
                <PrioritySelector/>
            </div>
            <Button variant={"outline"} type={"submit"}>Create</Button>
        </form>
    );
}