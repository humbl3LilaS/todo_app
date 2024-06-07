import Plus from "../../public/icon/plus.svg";
import Icon from "./Nav/Icon.tsx";

export default function AddNewNote() {
    return (
        <div className={"w-full h-[13%] flex justify-center items-center"}>
            <button type={"button"} className={"w-14 aspect-square rounded-full bg-blue-600"}>
                <Icon path={Plus} alt={"A plus sign icon"} className={"w-2/3 h-2/3 mx-auto"}/>
            </button>
        </div>
    );
}