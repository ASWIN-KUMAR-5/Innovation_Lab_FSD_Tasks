let target = Math.floor(Math.random() * 100);

let count = 0;

function playgame() {

    let guess = parseInt(document.getElementById("num").value);
    count++;

    if (guess < target) {
        document.getElementById("feedback").innerText = "Too low! Try again.";
    } else if (guess > target) {
        document.getElementById("feedback").innerText = "Too high! Try again.";
    } else {
        document.getElementById("feedback").innerText = "Correct!  You guessed it in " + count + " tries.";
    }

}