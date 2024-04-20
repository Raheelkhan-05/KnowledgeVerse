// JavaScript to change the background color of the capsule container
function changeColor() {
  document.getElementById("capsule-container").style.backgroundColor =
    "rgb(238, 165, 31)";
}

function restoreColor() {
  document.getElementById("capsule-container").style.backgroundColor = "white";
}
// Add a click event listener to the button
document
  .getElementById("favoriteButton")
  .addEventListener("click", function () {
    // Toggle the 'active' class to activate/deactivate the animation
    this.classList.toggle("active");

    // Toggle the text between "Add to Favorites" and "Added"
    if (this.classList.contains("active")) {
      this.innerHTML = '<span class="heart"></span> Added';
    } else {
      this.innerHTML = '<span class="heart"></span> Add to Favorites';
    }
  });
function redirectToSignUpPage() {
  window.location.href = "SignUp.html";
}
function validateLogin() {
  // Get the values of the input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return false; // Prevent the form from submitting
  }

  // If validation passes, you can choose to submit the form or take other actions
  return true; // Allow the form to submit
}

function clearButton() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  dobInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  var firstNameInput = document.getElementById("firstName");
  var lastNameInput = document.getElementById("lastName");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var dobInput = document.getElementById("dob");
  var createButton = document.getElementById("createButton");
  var clearButton = document.getElementById("clearButton");

  // Clear all input fields when the "Clear" button is clicked
  clearButton.addEventListener("click", function () {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    dobInput.value = "";
  });

  // Validate input when the "Create" button is clicked
  createButton.addEventListener("click", function () {
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var dob = dobInput.value;

    // Perform input validation logic here
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      dob === ""
    ) {
      alert("Please fill in all fields.");
      return false; // Prevent the form from submitting
    }

    // Add more validation as needed

    // If validation passes, allow the form to submit
  });
});
