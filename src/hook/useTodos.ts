import {TodoComparator, TodoDetails} from "../lib/types/database.types.ts";

export const useTodos = (data: TodoDetails[]) => {
    const overdue = data.filter(todo => dateChecker(todo, TodoComparator.OVERDUE));
    const today = data.filter(todo => dateChecker(todo, TodoComparator.TODAY));
    const upcoming = data.filter(todo => dateChecker(todo, TodoComparator.UPCOMING));
    return {
        today: today.length ? today : null,
        upcoming: upcoming.length ? upcoming : null,
        overdue: overdue.length ? overdue : null,
    };
};

const dateChecker = (data: TodoDetails, timeline: TodoComparator) => {
    const today = new Date();
    const todoDate = new Date(data.todos_details.created_at);

    switch (timeline) {
        case TodoComparator.OVERDUE:
            return today.getFullYear() > todoDate.getFullYear() || today.getMonth() > todoDate.getMonth() || today.getDate() > todoDate.getDate();
        case TodoComparator.TODAY:
            return today.getFullYear() === todoDate.getFullYear() && today.getMonth() === todoDate.getMonth() && today.getDate() === todoDate.getDate();
        case TodoComparator.UPCOMING:
            return today.getFullYear() < todoDate.getFullYear() || today.getMonth() < todoDate.getMonth() || today.getDate() < todoDate.getDate();
    }
};