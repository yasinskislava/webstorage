const tasks = document.querySelectorAll(".todo-res");
for (const i of tasks) {
    i.addEventListener("input", () => {
        localStorage.setItem(`task${i.getAttribute("id")}`, i.checked);
    });
}
for (const i of tasks) {
    i.checked = JSON.parse(localStorage.getItem(`task${i.getAttribute("id")}`));
}
///////////////////////////////////////////////////////////////////////////////////////////
const form1 = document.getElementById("task2_1");
localStorage.setItem("form1", JSON.stringify({
    username: "",
    password: ""
}));
form1.addEventListener("submit", () => {
    const tempInfo = {
        username: form1.elements.Username.value,
        password: form1.elements.Password.value
    }
    localStorage.setItem("form1", JSON.stringify(tempInfo));
});
document.addEventListener("DOMContentLoaded", () => {
    form1.elements.Username.value = JSON.parse(localStorage.getItem("form1")).username;
    form1.elements.Password.value = JSON.parse(localStorage.getItem("form1")).password;
});
///////////////////////////////////////////////////////////////////////////////////////////
const form2 = document.getElementById("task2_2");
const check = document.querySelector("#check");
form2.addEventListener("submit", () => {
    const tempInfo = {
        username: form2.elements.Username.value,
        password: form2.elements.Password.value
    }
    localStorage.setItem("form2", JSON.stringify(tempInfo));
});
check.addEventListener("click", () => {
    if (form2.elements.Username.value === JSON.parse(localStorage.getItem("form2")).username && form2.elements.Password.value === JSON.parse(localStorage.getItem("form2")).password) {
        alert("True");
    }
    else {
        alert("False");
    }
});
///////////////////////////////////////////////////////////////////////////////////////////
const addBtn = document.getElementById("add");
const addInfo = document.getElementById("addInput");
const editBtn = document.getElementById("edit");
const editInfo = document.getElementById("editInput");
const editIndex = document.getElementById("editIndex");
const deleteBtn = document.getElementById("delete");
const deleteIndex = document.getElementById("deleteIndex");
const list = document.querySelector(".links-list");
if (JSON.parse(localStorage.getItem("linksArr")) === undefined || JSON.parse(localStorage.getItem("linksArr")) === null) {
    localStorage.setItem("linksArr", JSON.stringify([]));
}
if (JSON.parse(localStorage.getItem("linksArr")).length === 0) {
    localStorage.setItem("linksArr", JSON.stringify([
    "https://www.youtube.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
]));
}


function reloadLinks() {
    list.innerHTML = "";
    for (const i of JSON.parse(localStorage.getItem("linksArr"))) {
        list.insertAdjacentHTML("beforeend", `<li><a href="${i}">${i.slice(i.indexOf("www")+4, i.indexOf(".com"))}</a></li>`);
    }
    
}

reloadLinks();

addBtn.addEventListener("click", () => {
    if (addInfo.value.includes("www") && addInfo.value.includes(".com")) {
        const tempArr = JSON.parse(localStorage.getItem("linksArr"));
        tempArr.push(addInfo.value);
        localStorage.setItem("linksArr", JSON.stringify(tempArr)); 
    }
    else {
        alert("Заповніть поля");
    }
    reloadLinks();
    addInfo.value = "";
});

editBtn.addEventListener("click", () => {
    if (editInfo.value.includes("www") && editInfo.value.includes(".com") && editIndex.value >= 0 && editIndex.value < JSON.parse(localStorage.getItem("linksArr")).length) {
        const tempArr = JSON.parse(localStorage.getItem("linksArr"));
        tempArr[editIndex.value] = editInfo.value;
        localStorage.setItem("linksArr", JSON.stringify(tempArr));
    }
    else {
        alert("Заповніть поля");
    }
    reloadLinks();
    editIndex.value = "";
    editInfo.value = "";
});

deleteBtn.addEventListener("click", () => {
    if (deleteIndex.value >= 0 && deleteIndex.value < JSON.parse(localStorage.getItem("linksArr")).length) {
        const tempArr = JSON.parse(localStorage.getItem("linksArr"));
        tempArr.splice(deleteIndex.value, 1);
        localStorage.setItem("linksArr", JSON.stringify(tempArr));
    }
    else {
        alert("Заповніть поля");
    }
    reloadLinks();
    deleteIndex.value = "";
});

///////////////////////////////////////////////////////////////////////////////////////////


