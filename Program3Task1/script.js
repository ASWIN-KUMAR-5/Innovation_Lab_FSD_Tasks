function reverse() {

    const input = document.getElementById("input").value
    const reverse = input.split(" ")
        .map(words => words.split("").reverse().join("")).join(" ");
    document.getElementById("output").innerText = "Reversed Sentence: " + reverse;
}