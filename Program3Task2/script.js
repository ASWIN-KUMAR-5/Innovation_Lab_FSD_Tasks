function removeDuplicates() {

    let arr = document.getElementById("arrayInput").value;
    let numbers = arr.split(",").map(num => parseFloat(num.trim()));
    let uniqueArr = [...new Set(numbers)];
    document.getElementById("output").innerText = "[" + uniqueArr.join(", ") + "]"
}