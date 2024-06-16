import {TodoComparator, TodoDetails} from "../lib/types/database.types.ts";
import {useTodo} from "./useTodos.ts";

export const useCategorizedTodo = (data: TodoDetails[]) => {
    const filteredData = useTodo(data, {select: "unfinished"});
    const overdue = filteredData.filter(todo => dateChecker(todo, TodoComparator.OVERDUE, {dateType: "due_at"}));
    const today = filteredData.filter(todo => dateChecker(todo, TodoComparator.TODAY, {dateType: "due_at"}));
    const upcoming = filteredData.filter(todo => dateChecker(todo, TodoComparator.UPCOMING, {dateType: "due_at"}));
    const noDue = filteredData.filter(todo => !todo.todos_details.due_at);
    return {
        today: today.length ? today : null,
        upcoming: upcoming.length ? upcoming : null,
        overdue: overdue.length ? overdue : null,
        noDue: noDue.length ? noDue : null,
    };
};

type ComparingOption = {
    dateType: "due_at" | "finished_at" | "created_at";
}

export const dateChecker = (data: TodoDetails, timeline: TodoComparator, option: ComparingOption) => {
    const today = new Date();
    if (option.dateType === "due_at" && !data.todos_details.due_at) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const dueDate = new Date(data.todos_details[option.dateType]);
    switch (timeline) {
        case TodoComparator.OVERDUE:
            return today.getFullYear() > dueDate.getFullYear() || today.getMonth() > dueDate.getMonth() || today.getDate() > dueDate.getDate();
        case TodoComparator.TODAY:
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() === dueDate.getMonth() && today.getDate() === dueDate.getDate();
        case TodoComparator.UPCOMING:
            return today.getFullYear() < dueDate.getFullYear() || today.getMonth() < dueDate.getMonth() || today.getDate() < dueDate.getDate();
        case TodoComparator.YESTERDAY:
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() === dueDate.getMonth() && today.getDate() - dueDate.getDate() == 1;
        case TodoComparator.THISWEEK:
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() === dueDate.getMonth() && today.getDate() - dueDate.getDate() > 2 && today.getDate() - dueDate.getDate() <= 7;
        case TodoComparator.LASTWEEK :
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() === dueDate.getMonth() && today.getDate() - dueDate.getDate() > 7 && today.getDate() - dueDate.getDate() <= 14;
        case TodoComparator.LASTMONTH:
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() - dueDate.getMonth() === 1;
    }
};