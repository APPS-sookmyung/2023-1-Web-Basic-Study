const colors = [
    '#ef5777', '#575fcf', '#4bcffa', '#34e7e4', '#Obe881', '#f53657', 
    '#3c40c6', '#0fbcf9', '#00d8d6', '#05c46b', '#ffC048', '#ffdd59',
    '#ff5e57', '#d2dae2', '#485460', '#ffa801', '#ffd32a', '#ff3f34',
];

function getRandomColor(colors){
  const index = parseInt(Math.random() * (colors.length));
  
  return colors[index];
};

function getTwoRandomColorList(){
  return [getRandomColor(colors), getRandomColor(colors)];
};
  
function handleCardBackgroundChange(element){
  const [color1, color2] = getTwoRandomColorList();
  
  element.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
};
  
const container = document.querySelector('#container');
  
const CARD_COUNT = 4;

for (let i = 0; i < CARD_COUNT; i++) {
  const cardElement = document.createElement('div');
  const buttonElement = document.createElement('button');

  cardElement.classList.add('card');

  buttonElement.textContent = 'Give me color';
  buttonElement.addEventListener('click', () => handleCardBackgroundChange(cardElement));

  cardElement.appendChild(buttonElement);
  container.appendChild(cardElement);
}
  
