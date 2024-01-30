const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
const generateEl = document.getElementById("generate")
const inputOneEl = document.getElementById("input1")
const inputTwoEl = document.getElementById("input2")

generateEl.addEventListener("click", function () {
    for (let i = 0; i < 15; i++) {
        inputOneEl.value += characters[Math.floor(Math.random() * characters.length)]
    }
    for (let i = 0; i < 15; i++) {
        inputTwoEl.value += characters[Math.floor(Math.random() * characters.length)]
    }
})