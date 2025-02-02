// your code starts here
let counterVal = 0;
let addButton = document.getElementById("button-add");
let subtractButton = document.getElementById("button-subtract");

function increment() {
  counterVal++;
  document.getElementById("counter-text").innerText = counterVal;
}

function decrement() {
  if (counterVal > 0) {
    counterVal--;
    document.getElementById("counter-text").innerText = counterVal;
  } else {
    alert("Counter value cannot be negative");
  }
}

addButton.addEventListener("click", function () {
  increment();
});

subtractButton.addEventListener("click", function () {
  decrement();
});
