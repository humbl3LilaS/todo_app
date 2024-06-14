import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import DatePicker from "../Popup/DatePicker.tsx";
import PrioritySelector from "../Popup/PrioritySelector.tsx";
import {Button} from "../ui/button.tsx";
import {useFormStore} from "../../store/formStore.tsx";
import {useCreateTodo} from "../../query/mutation.ts";
import {DialogClose} from "../ui/dialog.tsx";

const CreateTodoFormSchema = z.object({
    content: z.string().min(1, {message: "Content should not be empty"}),
});

type CreateTodoFromSchemaType = z.infer<typeof CreateTodoFormSchema>;

export default function CrateTodoForm() {
    const {mutateAsync} = useCreateTodo();
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        getFieldState,
    } = useForm<CreateTodoFromSchemaType>({resolver: zodResolver(CreateTodoFormSchema)});

    const {due, priority} = useFormStore();
    const onSubmit: SubmitHandler<CreateTodoFromSchemaType> = async (data) => {
        await mutateAsync({
            due_at: due ? due : null,
            content: data.content,
            priority: priority ? priority : null,
        });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"mb-4"}>
                <label htmlFor={"content"} className={"mb-2 block font-semibold capitalize"}>
                    content
                </label>
                <textarea id={"content"}
                          className={"w-full h-20 p-4 border border-stone-600 focus:outline-none"}
                          {...register("content")}
                />
                {errors.content && <h1>Content shouldn't be empty</h1>}
            </div>
            <div className={"mb-4 flex justify-start items-center gap-x-14"}>
                <label htmlFor={"due_at"} className={"mb-2 block font-semibold capitalize"}>
                    Due
                </label>
                <DatePicker/>
            </div>
            <div className={"mb-4 flex justify-start items-center gap-x-8"}>
                <label className={"mb-2 block font-semibold capitalize"}>
                    Priority
                </label>
                <PrioritySelector/>
            </div>
            <DialogClose asChild>
                <Button variant={"outline"} type={"submit"}
                        disabled={!getFieldState("content").isDirty || !isValid}
                >
                    Create
                </Button>
            </DialogClose>
        </form>
    );
}