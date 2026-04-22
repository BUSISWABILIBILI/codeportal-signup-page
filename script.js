const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  // mark field as "touched" when user leaves it
  input.addEventListener("blur", () => {
    input.classList.add("touched");
  });
});

const password = document.querySelector(
  'input[type="password"]:nth-of-type(1)',
);
const confirmPassword = document.querySelector(
  'input[type="password"]:nth-of-type(2)',
);

if (password && confirmPassword) {
  function validatePasswords() {
    if (confirmPassword.value === "") return;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  password.addEventListener("input", validatePasswords);
  confirmPassword.addEventListener("input", validatePasswords);
}
