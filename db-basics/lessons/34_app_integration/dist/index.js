"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const repo_1 = require("./repo");
async function main() {
    await (0, db_1.initDb)();
    await (0, repo_1.insertTask)(db_1.pool, "DBの復習をする");
    await (0, repo_1.insertTask)(db_1.pool, "SQLのJOINを練習する");
    await (0, repo_1.insertTask)(db_1.pool, "TypeScriptからCRUDする");
    console.log("=== 追加後 ===");
    console.table(await (0, repo_1.listTasks)(db_1.pool));
    await (0, repo_1.markDone)(db_1.pool, "2", true);
    console.log("=== id=2 を完了に変更 ===");
    console.table(await (0, repo_1.listTasks)(db_1.pool));
    await (0, repo_1.deleteTask)(db_1.pool, "1");
    console.log("=== id=1 を削除 ===");
    console.table(await (0, repo_1.listTasks)(db_1.pool));
    await (0, repo_1.updateTitle)(db_1.pool, "2", "あああ");
    console.log(await (0, repo_1.listTasks)(db_1.pool));
}
main()
    .catch((e) => {
    console.error(e);
    process.exitCode = 1;
})
    .finally(async () => {
    await db_1.pool.end(); // 接続を閉じる
});
//# sourceMappingURL=index.js.map