import {TodoComparator, TodoDetails} from "../lib/types/database.types.ts";
import {dateChecker} from "./useCategorizedTodo.ts";

export const useGroupedTodoByDate = (data: TodoDetails[]) => {
    const today = data.filter(todo => dateChecker(todo, TodoComparator.TODAY, {dateType: "finished_at"}));
    const lastWeek = data.filter(todo => dateChecker(todo, TodoComparator.LASTWEEK, {dateType: "finished_at"}));
    const lastMonth = data.filter(todo => dateChecker(todo, TodoComparator.LASTMONTH, {dateType: "finished_at"}));
    const thisWeek = data.filter(todo => dateChecker(todo, TodoComparator.THISWEEK, {dateType: "finished_at"}));
    const yesterday = data.filter(todo => dateChecker(todo, TodoComparator.YESTERDAY, {dateType: "finished_at"}));
    return {
        today: today.length ? today : null,
        yesterday: yesterday.length ? yesterday : null,
        lastWeek: lastWeek.length ? lastWeek : null,
        lastMonth: lastMonth.length ? lastMonth : null,
        thisWeek: thisWeek.length ? thisWeek : null,
    };
};