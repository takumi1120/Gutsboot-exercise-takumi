import type { Pool } from "pg";
export type Task = {
    id: string;
    title: string;
    done: boolean;
    createdAt: string;
};
export declare function insertTask(pool: Pool, title: string): Promise<Task>;
export declare function listTasks(pool: Pool): Promise<Task[]>;
export declare function markDone(pool: Pool, id: string, done: boolean): Promise<void>;
export declare function updateTitle(pool: Pool, id: string, title: string): Promise<void>;
export declare function deleteTask(pool: Pool, id: string): Promise<void>;
//# sourceMappingURL=repo.d.ts.map