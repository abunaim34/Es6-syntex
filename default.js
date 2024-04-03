// Default --> is value is not provide, take this as a default.
// Default value is as a number
function add(num1 = 0, num2 = 1){
    const result = num1 + num2;
    console.log(result)
    return result;
}
// const sum = add(7, 5)
const sum = add(5);
// const sum = add();

// Dafult value is as a string
function name(first, last = ""){
    const full = first + " " + last
    return full
}