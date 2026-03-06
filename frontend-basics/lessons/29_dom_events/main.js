// 1) クリックでカウント
const countValueEl = document.querySelector("#countValue");
const countUpBtn = document.querySelector("#countUpBtn");
const countdownBtn = document.querySelector("#countdownBtn");
const resetBtn = document.querySelector("#resetBtn");
let count = 0;

countUpBtn.addEventListener("click", () => {
    count += 1;
    countValueEl.textContent = String(count);
    if (count >= 10) {
        countValueEl.classList.add("is-big");
    } else (countValueEl.classList.remove("is-big"))

});
countdownBtn.addEventListener("click", () => {
    if (count > 0) { count = count - 1 };
    countValueEl.textContent = String(count);
    if (count >= 10) {
        countValueEl.classList.add("is-big");
    } else (countValueEl.classList.remove("is-big"))

});


resetBtn.addEventListener("click", () => {
    count = 0;
    countValueEl.textContent = String(count);
});

// 2) 入力のプレビュー
const nameInputEl = document.querySelector("#nameInput");
const Hint = document.querySelector(".hint")
const previewTextEl = document.querySelector("#previewText");

nameInputEl.addEventListener("input", () => {


    const value = nameInputEl.value.trim();
    if (value.length === 0) {
        previewTextEl.textContent = "未入力"
    } else {
        previewTextEl.textContent = value
    }
    if (nameInputEl.value.length > 20) {
        Hint.textContent = "名前は２０文字で入力してください"
        Hint.classList.add("error")
    }
    else {
        Hint.textContent = "入力すると下のプレビューが更新されます"
        Hint.classList.remove("error")
    }
    // previewTextEl.textContent = value.length === 0 ? "（未入力）" : value;

});

// 3) メールの簡易チェック（@ と . を含むか）
const emailFieldEl = document.querySelector("#emailField");
const emailInputEl = document.querySelector("#emailInput");
const emailErrorEl = document.querySelector("#emailError");

function looksLikeEmail(value) {
    const atcount = value.sprit("@").lengt - 1
    if (atcount = 1) {
        consol.log("#emailErrorEl")
    }
    return value.includes("@") && value.includes(".");
}


function setEmailErrorVisible(visible) {
    if (visible) {
        emailFieldEl.classList.add("is-error")
        emailErrorEl.classList.remove("hidden");
        return;
    }
    emailFieldEl.classList.remove("is-error");
    emailErrorEl.classList.add("hidden");
}

emailInputEl.addEventListener("input", () => {
    const value = emailInputEl.value.trim();
    if (value.length === 0) {
        setEmailErrorVisible(false);
        return;
    }
    setEmailErrorVisible(!looksLikeEmail(value));
});