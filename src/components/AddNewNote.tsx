import Plus from "../../public/icon/plus.svg";
import Icon from "./Nav/Icon.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./ui/tooltip.tsx";

export default function AddNewNote() {
    return (
        <TooltipProvider>
            <Tooltip>
                <div className={"w-full h-[13%] flex justify-center items-center"}>
                    <TooltipTrigger asChild >
                        <button type={"button"} className={"w-14 aspect-square rounded-full bg-blue-600"}>
                            <Icon path={Plus} alt={"A plus sign icon"} className={"w-2/3 h-2/3 mx-auto"}/>
                        </button>
                    </TooltipTrigger>
                </div>
                <TooltipContent className={"mb-3"}>
                    <p className={"p-2 capitalize"}>Add new Todo</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}