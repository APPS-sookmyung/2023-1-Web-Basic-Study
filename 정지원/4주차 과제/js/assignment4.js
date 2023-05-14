function randomColor() {
	const colors = [
		"#ef5777","#575fcf","#4bcffa","#34e7e4","#0be881","#f53b57",
		"#3c40c6","#0fbcf9","#00d8d6","#05c46b","#ffc048","#ffdd59",
		"#ff5e57","#d2dae2","#485460","#ffa801","#ffd32a","#ff3f34"
	];
	// colors 배열에서 무작위로 선택한 색상을 반환
	const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
	let randomColor2;
	do {
		randomColor2 = colors[Math.floor(Math.random() * colors.length)];
	} while (randomColor2 === randomColor1);
	document.body.style.backgroundColor = randomColor1;
	document.body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
}