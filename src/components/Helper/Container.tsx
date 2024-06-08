import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type ContainerProps = {
    children: ReactNode;
    className?: string;
}
export default function Container({children, className}: ContainerProps) {
    return (
        <div className={twMerge("w-4/5 h-screen p-10", className)}>
            {children}
        </div>
    );
}