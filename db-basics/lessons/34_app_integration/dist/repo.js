"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTask = insertTask;
exports.listTasks = listTasks;
exports.markDone = markDone;
exports.updateTitle = updateTitle;
exports.deleteTask = deleteTask;
async function insertTask(pool, title) {
    const res = await pool.query(`INSERT INTO tasks (title) VALUES ($1)
     RETURNING id, title, done, created_at;`, [title]);
    return toTask(res.rows[0]);
}
async function listTasks(pool) {
    const res = await pool.query(`SELECT id::text AS id, title, done, created_at
     FROM tasks
     ORDER BY id;`);
    return res.rows.map(toTask);
}
async function markDone(pool, id, done) {
    await pool.query(`UPDATE tasks SET done = $1 WHERE id = $2;`, [done, id]);
}
async function updateTitle(pool, id, title) {
    const res = await pool.query(`update tasks
        set title =$1
        where id =$2
         RETURNING id, title, done, created_at;`, [title, id]);
}
async function deleteTask(pool, id) {
    await pool.query(`DELETE FROM tasks WHERE id = $1;`, [id]);
}
function toTask(row) {
    return {
        id: String(row.id),
        title: String(row.title),
        done: Boolean(row.done),
        createdAt: new Date(row.created_at).toISOString(),
    };
}
//# sourceMappingURL=repo.js.map