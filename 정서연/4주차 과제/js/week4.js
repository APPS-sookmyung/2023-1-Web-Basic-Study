const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const button = document.querySelector("#btn");

function changeColors() {
  let color1, color2;
  do {
    // 같은 색 그라데이션 방지
    color1 = colors[Math.floor(Math.random() * colors.length)]; // Math.floor: 정수 Math.random: 0~1 사이 난수
    color2 = colors[Math.floor(Math.random() * colors.length)]; // * colors.length: 0과 배열의 마지막 인덱스 사이의 값 구하기
  } while (color1 === color2);
  //   backgroundImage인 이유: linear-gradient이 기본적으로 지정하는 속성
  //   ` 조심하기.. ' 아님
  body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
}

button.addEventListener("click", changeColors); // addEventListener(): 이벤트 리스너 등록 메서드
