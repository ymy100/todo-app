const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todo-list");
const remaining = document.getElementById("remaining");

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
});

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "削除";

    delBtn.addEventListener("click", () => {
        list.removeChild(li);
        updateRemaining();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    updateRemaining();
});

function updateRemaining() {
    remaining.innerText = `残りのやること: ${list.children.length}`;
}