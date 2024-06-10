import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type Props = {
    children: ReactNode;
    className?: string;
}

export default function NavItem({children, className}: Props) {
    return (
        <li className={twMerge("flex capitalize gap-x-6 font-semibold text-stone-700", className)}>
            {children}
        </li>
    );
}