const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}
function checkString(){
    const textString = input.value
    const reversedString = reverseString(textString)

    if (textString === reversedString){
        alert("This is a palindrome")
    } else {
        alert("This is not a palindrome")
    }

    input.value = ""
}