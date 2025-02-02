function checkAge() {
  age = document.getElementById("ageInput").value;
  // this will prevent the user from entering a input/age that is too old/large e.g. 999999
  if (age >= 151) {
    document.getElementById("result").innerHTML = "That is too old!";
  } else if (age >= 20 && age <= 150) {
    document.getElementById("result").innerHTML = "Adult";
  } else if (age >= 13 && age <= 19) {
    document.getElementById("result").innerHTML = "Teenager";
  } else if (age >= 0 && age <= 12) {
    document.getElementById("result").innerHTML = "Child";
  } else {
    // if the user enters a negative number it will display this message and prompt the user to enter a valid number
    document.getElementById("result").innerHTML =
      "Invalid age. Please enter a valid number.";
  }
}
