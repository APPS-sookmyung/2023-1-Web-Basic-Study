// 피라미드 출력
const myHeading = document.getElementById("pyramid");
let pyramid = "";
let height = 4; // 피라미드 높이

for (let i = 1; i <= height; i++) {
  for (let j = 1; j <= height - i; j++) {
    pyramid += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pyramid += "*";
  }
  pyramid += "\n";
}

console.log(pyramid);

// 졸업 선물
function maxItems(n, arr) {
  arr.sort((a, b) => a[0] - b[0]); // 상품 가격 기준으로 정렬

  let cnt = 0; // 구매한 상품의 수
  let total = 0; // 총 상품 가격

  for (let i = 0; i < arr.length; i++) {
    let price = arr[i][0];
    let delivery = arr[i][1];

    let salePrice = price / 2; // 할인 가격 계산

    let itemTotal = salePrice + delivery; // 총 가격 계산

    if (total + itemTotal <= n) {
      // 예산 안에 있는 경우 구매
      cnt++;
      total += itemTotal;
    }
  }

  return cnt;
}

let arr = [
  [6000, 6000],
  [2000, 2000],
  [4000, 3000],
  [4000, 5000],
  [10000, 3000],
];
console.log(maxItems(28000, arr));

// 90점 이상 학생 이름 출력
const testArray = [
  { name: "조영서", score: 100 },
  { name: "신진영", score: 90 },
  { name: "오지수", score: 80 },
  { name: "서정연", score: 70 },
];

const ResultMap = testArray
  .filter((student) => student.score >= 90) // 90점 이상 학생 필터링
  .map((student) => student.name); // 이름으로만 새로운 배열 생성

console.log(ResultMap);

// 미성년자/성인 판별
var input = prompt("당신의 나이는?");
alert(input);

if (input >= 20) {
  document.write("당신은 성인입니다.");
} else {
  document.write("당신은 미성년자입니다.");
}
