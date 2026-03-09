import { pool, initDb } from "./db";
import { insertTask, listTasks, markDone, deleteTask, updateTitle } from "./repo";

async function main() {
    await initDb();

    await insertTask(pool, "DBの復習をする");
    await insertTask(pool, "SQLのJOINを練習する");
    await insertTask(pool, "TypeScriptからCRUDする");

    console.log("=== 追加後 ===");
    console.table(await listTasks(pool));

    await markDone(pool, "2", true);

    console.log("=== id=2 を完了に変更 ===");
    console.table(await listTasks(pool));

    await deleteTask(pool, "1");

    console.log("=== id=1 を削除 ===");
    console.table(await listTasks(pool));

    await updateTitle(pool, "2", "あああ");
    console.log(await listTasks(pool))

}

main()
    .catch((e) => {
        console.error(e);
        process.exitCode = 1;
    })
    .finally(async () => {
        await pool.end(); // 接続を閉じる
    });

