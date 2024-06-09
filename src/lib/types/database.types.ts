// export type User = {
//     id: string;
//     aud: "authenticated"
// }

type Rating = 1 | 2 | 3 | 4 | 5;

export interface TodoDetails {
    "todos_details": {
        id: string;
        content: string;
        priority: Rating;
        created_at: string;
        finish_at?: string;
        due_at?: string;
        is_finish: boolean;
    };
}

export const enum TodoComparator {
    OVERDUE,
    TODAY,
    UPCOMING
}