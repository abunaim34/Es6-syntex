const numbers = [10, 58, 47, 77]

// foor loop
for(let i = 0; i < numbers.length; i++){
    console.log(i)
}

// while loop
while(i > numbers){
    i+= number + i;
    i++;
}

// for of with number
for(const num of numbers){
    console.log(num)
}

// for of with string.
const nobab = 'abu naim salma'
for(const char of nobab){
    console.log(char)
}

// object
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
    habu: 10,
}

// for in with object.
for(const key in glass){
    const value = glass[key]
    console.log(key, value)
}

// for of with object.
const keys = Object.keys(glass)

for(const key of keys){
    const value = glass[key];
    console.log(key, value)
}