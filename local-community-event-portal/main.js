// Log welcome message
console.log("Welcome to the Community Portal");

// Alert when page is fully loaded
window.onload = function () {
  alert("Page loaded successfully!");
};

// Handle form submission
const form = document.getElementById("registrationForm");
const output = document.getElementById("confirmationMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  output.textContent = "Thank you for registering!";
});
