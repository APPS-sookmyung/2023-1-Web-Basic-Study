const colors = [
    '#ef5777', '#575fcf', '#4bcffa', '#34e7e4', '#Obe881', '#f53657', 
    '#3c40c6', '#0fbcf9', '#00d8d6', '#05c46b', '#ffC048', '#ffdd59',
    '#ff5e57', '#d2dae2', '#485460', '#ffa801', '#ffd32a', '#ff3f34',
];

function getRandomColor(colors){
    const index = parseInt(Math.random() * (colors.length - 1));
    return colors[index];
};

function getTwoRandomColorList(){
    return [getRandomColor(colors), getRandomColor(colors)];
};

function handleCardBackgroundChange(element){
    const [color1, color2] = getTwoRandomColorList();
    element.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
};

const card1 = document.querySelector('#card-1');
const card1Button = document.querySelector('#card-1_button');

const card2 = document.querySelector('#card-2');
const card2Button = document.querySelector('#card-2_button');

const card3 = document.querySelector('#card-3');
const card3Button = document.querySelector('#card-3_button');

const card4 = document.querySelector('#card-4');
const card4Button = document.querySelector('#card-4_button');

card1Button.addEventListener('click', () => handleCardBackgroundChange(card1));
card2Button.addEventListener('click', () => handleCardBackgroundChange(card2));
card3Button.addEventListener('click', () => handleCardBackgroundChange(card3));
card4Button.addEventListener('click', () => handleCardBackgroundChange(card4));