import type { Pool } from "pg";

export type Task = {
    id: string;
    title: string;
    done: boolean;
    createdAt: string;
};

export async function insertTask(pool: Pool, title: string) {
    const res = await pool.query(
        `INSERT INTO tasks (title) VALUES ($1)
     RETURNING id, title, done, created_at;`,
        [title]
    );
    return toTask(res.rows[0]);
}

export async function listTasks(pool: Pool): Promise<Task[]> {
    const res = await pool.query(
        `SELECT id::text AS id, title, done, created_at
     FROM tasks
     ORDER BY id;`
    );
    return res.rows.map(toTask);
}

export async function markDone(pool: Pool, id: string, done: boolean) {
    await pool.query(
        `UPDATE tasks SET done = $1 WHERE id = $2;`,
        [done, id]
    );
}
export async function updateTitle(pool: Pool, id: string, title: string) {
    const res = await pool.query(
        `update tasks
        set title =$1
        where id =$2
         RETURNING id, title, done, created_at;`,
        [title, id]
    );


}
export async function deletetitle(pool: Pool, id: string, title: string) {
    const res = await pool.query(
        `delete from tasks
        where id = $1
        returning id, title,done,created_at;`,
        [title]
    )


}

export async function deleteTask(pool: Pool, id: string) {
    await pool.query(
        `DELETE FROM tasks WHERE id = $1;`,
        [id]
    );
}

function toTask(row: any): Task {
    return {
        id: String(row.id),
        title: String(row.title),
        done: Boolean(row.done),
        createdAt: new Date(row.created_at).toISOString(),
    };
}
