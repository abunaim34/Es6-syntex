// object destructuring.
// details
const actor = {
    name: 'ananto',
    age: 52,
    phone: '01882585833',
    money: 25252545655,
}
const name = actor.name;
const phone = actor.phone;
const age = actor.age

console.log(name)
console.log(name)
console.log(phone)
console.log(phone)
console.log(age)
console.log(age)

// summary
const actorr = {
    namee: 'ananto',
    age: 52,
    phonee: '01882585833',
    money: 25252545655,
}
const {namee, phonee, age: boyos} =actorr

console.log(name)
console.log(name)
console.log(phone)
console.log(phone)
// console.log(age)
// console.log(age)
console.log(boyos)
console.log(boyos)


// array distucturing.
const numbers = [43, 45]
const [first, second] = numbers;

const [x, y] = [11, 58]


// advance.
function doubleThem(a, b){
    return [a*2, b*2]
}
const [prothom, ditio] = doubleThem(6, 9)
console.log(prothom, ditio)