import NavItem from "./NavItem.tsx";
import Calendar from "../../../public/icon/calendar.svg";
import Check from "../../../public/icon/check-solid.svg";
import Inbox from "../../../public/icon/inbox-solid.svg";
import Star from "../../../public/icon/star-regular.svg";
import TrashBin from "../../../public/icon/trash.svg";
import Icon from "./Icon.tsx";
import AddNewNote from "../AddNewNote.tsx";


export default function SideNav() {
    return (
        <aside className={"w-1/5 h-screen border-r-[1.5px] border-r-gray-300"}>
            <div className={"w-full h-full pt-16 pb-8 px-8"}>
                <nav className={"h-[87%]"}>
                    <ul className={"flex flex-col justify-center items-start gap-y-6"}>
                        <NavItem>
                            <Icon path={Inbox} alt={"Image that represent a mail inbox"}/>
                            <a href={"#"}>inbox</a>
                        </NavItem>

                        <NavItem>
                            <Icon path={Star} alt={"Image of a Star"}/>
                            <a href={"#"}>Today</a>
                        </NavItem>

                        <NavItem>
                            <Icon path={Calendar} alt={"Image of a Calendar"}/>
                            <a href={"#"}>Calendar</a>
                        </NavItem>

                        <NavItem>
                            <Icon path={Check} alt={"A correct mark image which represents completed task"}/>
                            <a href={"#"}>Completed</a>
                        </NavItem>

                        <NavItem>
                            <Icon path={TrashBin} alt={"Image of a Trash Bin"}/>
                            <a href={"#"}>Trash</a>
                        </NavItem>
                    </ul>
                </nav>
                <AddNewNote/>
            </div>
        </aside>
    )
        ;
}

