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
    "#ff3f34"
  ];
  
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  


 const changeBackground = (event) => {
  // event.preventDefault();는 form이 있을 때 창 새로고침을 원하지 않을 때 쓰는 것!
  

  const randomIndex1 = Math.floor(Math.random() * colors.length);
  const randomIndex2 = Math.floor(Math.random() * colors.length);
  const color1 = colors[randomIndex1];
  const color2 = colors[randomIndex2];
  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
      };

 button.addEventListener("click", changeBackground);