import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select.tsx";
import {useEffect, useState} from "react";
import {useFormStore} from "../../store/formStore.tsx";
import {Rating} from "../../lib/types/database.types.ts";

export default function PrioritySelector() {
    const [state, setState] = useState<number>();
    const {setPriority} = useFormStore();

    useEffect(() => {
        setPriority(state as Rating);
    }, [state, setPriority]);


    return (
        <Select onValueChange={(value) => setState(parseInt(value))}>
            <SelectTrigger>
                <SelectValue placeholder={"Set Priority"}/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={"1"}>1</SelectItem>
                <SelectItem value={"2"}>2</SelectItem>
                <SelectItem value={"3"}>3</SelectItem>
                <SelectItem value={"4"}>4</SelectItem>
                <SelectItem value={"5"}>5</SelectItem>
            </SelectContent>
        </Select>
    );
}