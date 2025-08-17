function validatePassword() {
  const password = document.getElementById("password").value;
  let output = document.getElementById("output");

  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (password.trim() === "") {
    output.innerText = "Password cannot be empty";
  } else if (!regex.test(password)) {
    output.innerText = "Password must be at least 8 characters long, contain an uppercase letter, and a number";
  } else {
    output.innerText = "Password is valid";
  }
}