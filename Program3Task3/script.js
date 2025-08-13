function count() {

    const input = document.getElementById("input").value
    const totalVowels = (input.match(/[aeiou]/gi) || []).length;
    document.getElementById("output").innerText = "Vowels Count: " + totalVowels;
}