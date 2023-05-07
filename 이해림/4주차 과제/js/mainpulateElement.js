const h1 = document.querySelector("#name");

const root = document.getElementById("root");
console.dir(root);

const button = document.querySelector("#btn");
console.log(button.classList);

if (button.classList.contains("add")) {
    button.classList.remove("add");
} else {
    button.classList.add("add");
}

console.log(button.classList);