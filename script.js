const form = document.querySelector("form");

const firstName = form.querySelector('input[type="text"]:nth-of-type(1)');
const lastName = form.querySelector('input[type="text"]:nth-of-type(2)');
const email = form.querySelector('input[type="email"]');
const phone = form.querySelector('input[type="tel"]');
const password = form.querySelector('input[type="password"]:nth-of-type(1)');
const confirmPassword = form.querySelector(
  'input[type="password"]:nth-of-type(2)',
);

// helper functions
function showError(input) {
  input.classList.add("error");
  input.classList.remove("success");
}

function showSuccess(input) {
  input.classList.add("success");
  input.classList.remove("error");
}

// validation rules
function validateName(input) {
  if (input.value.trim().length < 2) {
    showError(input);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function validateEmail(input) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(input.value.trim())) {
    showError(input);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function validatePhone(input) {
  if (input.value.trim() === "") {
    showSuccess(input); // optional field
    return true;
  }

  const pattern = /^[0-9]{10,15}$/;

  if (!pattern.test(input.value.trim())) {
    showError(input);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function validatePassword(input) {
  if (input.value.length < 6) {
    showError(input);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function validateConfirmPassword() {
  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value === ""
  ) {
    showError(confirmPassword);
    return false;
  } else {
    showSuccess(confirmPassword);
    return true;
  }
}

// real-time validation
firstName.addEventListener("input", () => validateName(firstName));
lastName.addEventListener("input", () => validateName(lastName));
email.addEventListener("input", () => validateEmail(email));
phone.addEventListener("input", () => validatePhone(phone));
password.addEventListener("input", () => validatePassword(password));
confirmPassword.addEventListener("input", validateConfirmPassword);

// form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid =
    validateName(firstName) &
    validateName(lastName) &
    validateEmail(email) &
    validatePhone(phone) &
    validatePassword(password) &
    validateConfirmPassword();

  if (isValid) {
    alert("Account created successfully 🚀");
    form.reset();

    // remove styles after reset
    form.querySelectorAll("input").forEach((input) => {
      input.classList.remove("success", "error");
    });
  }
});
