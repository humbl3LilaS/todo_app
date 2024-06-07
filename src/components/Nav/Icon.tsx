import {twMerge} from "tailwind-merge";

type Props = {
    path: string;
    alt?: string;
    className?: string;
}
export default function Icon({className, path, alt}: Props) {
    return (
        <img className={twMerge("w-6 aspect-square", className)} src={path} alt={alt}/>
    );
}