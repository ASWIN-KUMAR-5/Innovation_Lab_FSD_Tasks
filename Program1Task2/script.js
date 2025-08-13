function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("multiplication").innerText = "Multiplication: Enter valid numbers";
        document.getElementById("division").innerText = "Division: Enter valid numbers";
    } else {
        document.getElementById("multiplication").innerText = "Multiplication: " + num1 + " * " + num2 + " = " + (num1 * num2);

        if (num2 === 0) {
            document.getElementById("division").innerText = "Division: Cannot divide by zero";
        } else {
            document.getElementById("division").innerText = "Division: " + num1 + " ÷ " + num2 + " = " + (num1 / num2);
        }
    }
}