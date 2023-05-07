const findGroup = document.getElementsByClassName("find");
const [btn, span] = findGroup;

console.dir(btn);
console.dir(span);

btn.innerHTML = "찾았다!";
span.innerHTML = "찾았다!";

const findBtn = document.getElementById("btn");
findBtn.innerHTML = "find By Id !!";

const queryBtn1 = document.querySelector("div .find:first-child");
const queryBtn2 = document.querySelector("#btn");

console.log(queryBtn1);
console.log(queryBtn2);