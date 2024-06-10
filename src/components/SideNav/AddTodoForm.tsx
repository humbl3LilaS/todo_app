import {date, z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const AddTodoFormSchema = z.object({
    content: z.string().min(1, {message: "Content should not be empty"}),
    due_at: date().optional(),
    priority: z.number().min(1).max(5).optional(),
});

type AddTodoFormSchemaType = z.infer<AddTodoFormSchemaType>;

export default function AddTodoForm() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<AddTodoFormSchemaType>({resolver: zodResolver(AddTodoFormSchema)});

    const onSubmit: SubmitHandler<AddTodoFormSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor={"content"}>
                    content
                </label>
                <textarea id={"content"}></textarea>
            </div>
            <div>
                <label htmlFor={"due_at"}>
                    Due Date
                </label>
            </div>
        </form>
    );
}