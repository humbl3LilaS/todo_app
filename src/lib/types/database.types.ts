// export type User = {
//     id: string;
//     aud: "authenticated"
// }

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface TodoDetails {
    "todos_details": {
        id?: string;
        content: string;
        priority?: Rating | null;
        created_at?: string;
        finish_at?: string | null;
        due_at?: Date | null;
        is_finish?: boolean;
    };
}

export const enum TodoComparator {
    OVERDUE,
    TODAY,
    UPCOMING
}