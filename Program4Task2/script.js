function validateEmail() {
  const email = document.getElementById("email").value;
  let output = document.getElementById("output");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.trim() === "") {
    output.innerText = "Email cannot be empty";
  } else if (!regex.test(email)) {
    output.innerText = "Invalid email format";
  } else {
    output.innerText = "Email is valid";
  }
}