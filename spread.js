// Math.max --> number
const max = Math.max(6, 23, 54, 1, 88)
console.log(max)

// Math.max --> array
const numbers = [3, 5, 85, 90, 15]
const arrayMax = Math.max(...numbers)

// use spread oerator to copy.
const friends = [5, 10, 15, 21]
const bondhu = friends;
const dosto = [...friends] // copy
friends.push(100)
console.log(dosto)
console.log(friends);


// advance
const sonkha = [...friends, 999] //add extra elements while copy;
console.log(sonkha);