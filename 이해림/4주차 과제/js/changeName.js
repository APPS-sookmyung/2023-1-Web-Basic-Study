const div = document.querySelector("#root");
const form = document.createElement("form");

const titleName = document.getElementById("name");

const inputName = document.createElement("input");
inputName.placeholder = "이름을 작성해주세요";

const inputBtn = document.createElement("button");
inputBtn.innerText = "제출";

div.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputBtn);

console.dir(inputBtn);

const submitNameEvent = (event) => {
    event.preventDefault();
    //console.log(event);
    const name = inputName.value;
    titleName.innerHTML = name;
};
form.addEventListener("submit", submitNameEvent);