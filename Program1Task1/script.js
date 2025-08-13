function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("addition").innerText = "Addition: Enter valid numbers";
        document.getElementById("subtraction").innerText = "Subtraction: Enter valid numbers";
    } else {
        document.getElementById("addition").innerText = "Addition: " + num1 + " + " + num2 + " = " + (num1 + num2);
        document.getElementById("subtraction").innerText = "Subtraction: " + num1 + " - " + num2 + " = " + (num1 - num2);
    }
}