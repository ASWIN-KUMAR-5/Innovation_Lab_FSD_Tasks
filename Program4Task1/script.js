function validateName() {
  const name = document.getElementById("name").value;
  let output = document.getElementById("output");

  const regex = /^[A-Za-z\s]+$/;

  if (name.trim() === "") {
    output.innerText = " Name cannot be empty";
  } else if (!regex.test(name)) {
    output.innerText = "Name can only contain letters and spaces";
  } else {
    output.innerText = "Name is valid";
  }
}