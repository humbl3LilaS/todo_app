import NavItem from "./NavItem.tsx";

import Calendar from "../../../public/icon/calendar.svg";
import Check from "../../../public/icon/check-solid.svg";
import Home from "../../../public/icon/home.svg";
import Star from "../../../public/icon/star-regular.svg";
import TrashBin from "../../../public/icon/trash.svg";
import Icon from "./Icon.tsx";
import PopupButton from "../Popup/PopupButton.tsx";
import {Link, Outlet} from "react-router-dom";


export default function SideNav() {
    return (
        <section className={"flex justify-between items-center relative"}>
            <aside className={"w-1/5 h-screen border-r-[1.5px] border-r-gray-300"}>
                <div className={"w-full h-full pt-16 pb-8 px-8"}>
                    <nav className={"h-[87%]"}>
                        <ul className={"flex flex-col justify-center items-start gap-y-6"}>
                            <NavItem>
                                <Icon path={Home} alt={"Image that represent a mail inbox"}/>
                                <Link to={"/"}>Home</Link>
                            </NavItem>

                            <NavItem>
                                <Icon path={Star} alt={"Image of a Star"}/>
                                <Link to={"today"}>Today</Link>
                            </NavItem>

                            <NavItem>
                                <Icon path={Calendar} alt={"Image of a Calendar"}/>
                                <Link to={"calendar"}>Calendar</Link>
                            </NavItem>

                            <NavItem>
                                <Icon path={Check} alt={"A correct mark image which represents completed task"}/>
                                <Link to={"completed"}>completed</Link>
                            </NavItem>

                            <NavItem>
                                <Icon path={TrashBin} alt={"Image of a Trash Bin"}/>
                                <Link to={"trashbin"}>Trash</Link>
                            </NavItem>
                        </ul>
                    </nav>
                    <PopupButton/>
                </div>
            </aside>
            <Outlet/>
        </section>
    );
}

