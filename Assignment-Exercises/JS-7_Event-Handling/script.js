button = document.getElementById("colorButton");

function bgColorRandomGenerator() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // it will generate a random number between 0 to 16
    // and then it will select the character from the letters string
    // and then it will append the character to the color string
    // this process will repeat 6 times
    // Used Math.random and floor to make sure it is between 0 to 16 only and not a decimal number
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

button.addEventListener("click", function () {
  bgColorRandomGenerator();
});
