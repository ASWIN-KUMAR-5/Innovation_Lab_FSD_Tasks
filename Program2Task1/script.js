function generateNumber() {
    var randomNumber = Math.floor(Math.random()*100)+1;
    document.getElementById("result").innerText = "Generated Number: " + randomNumber;
}