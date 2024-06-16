import {TodoComparator, TodoDetails} from "../lib/types/database.types.ts";
import {useTodo} from "./useTodos.ts";

export const useCategorizedTodo = (data: TodoDetails[]) => {
    const filteredData = useTodo(data, {select: "unfinished"});
    const overdue = filteredData.filter(todo => dateChecker(todo, TodoComparator.OVERDUE));
    const today = filteredData.filter(todo => dateChecker(todo, TodoComparator.TODAY));
    const upcoming = filteredData.filter(todo => dateChecker(todo, TodoComparator.UPCOMING));
    const noDue = filteredData.filter(todo => !todo.todos_details.due_at);
    return {
        today: today.length ? today : null,
        upcoming: upcoming.length ? upcoming : null,
        overdue: overdue.length ? overdue : null,
        noDue: noDue.length ? noDue : null,
    };
};

const dateChecker = (data: TodoDetails, timeline: TodoComparator) => {
    const today = new Date();
    if (!data.todos_details.due_at) {
        return false;
    }
    const dueDate = new Date(data.todos_details.due_at);
    switch (timeline) {
        case TodoComparator.OVERDUE:
            return today.getFullYear() > dueDate.getFullYear() || today.getMonth() > dueDate.getMonth() || today.getDate() > dueDate.getDate();
        case TodoComparator.TODAY:
            return today.getFullYear() === dueDate.getFullYear() && today.getMonth() === dueDate.getMonth() && today.getDate() === dueDate.getDate();
        case TodoComparator.UPCOMING:
            return today.getFullYear() < dueDate.getFullYear() || today.getMonth() < dueDate.getMonth() || today.getDate() < dueDate.getDate();
    }
};