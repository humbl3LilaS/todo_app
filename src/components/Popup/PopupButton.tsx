import Plus from "../../../public/icon/plus.svg";
import Icon from "../SideNav/Icon.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../ui/dialog.tsx";
import AddTodoFrom from "../SideNav/AddTodoForm.tsx";

export default function PopupButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={"h-[13%] w-full flex justify-center items-center"}>
                    <button type={"button"} className={"w-14 aspect-square rounded-full bg-blue-600"}>
                        <Icon path={Plus} alt={"A plus sign icon"} className={"w-2/3 h-2/3 mx-auto"}/>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Todo</DialogTitle>
                    <DialogDescription>
                        What is on your mind?
                    </DialogDescription>
                </DialogHeader>
                <AddTodoFrom/>
            </DialogContent>
        </Dialog>
    );
}