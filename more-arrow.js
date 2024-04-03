// if paramiter is tow
const  difference = (x, y) => x - y;

console.log(difference)

// if paramiter is more than one
const multiply = (first, second, third) => first * second * third;

console.log(multiply);

// if paramiter is one with bracket.  object
const getAge = (persion) => persion.age;
const student = {name: 'ananta', age: 45};
const age = getAge(student);
console.log(age)


// if paramiter is one without bracket.  array
const getHird = Number => Number[2];
const hird = getHird([5, 9, 88, 2, 13])

console.log(hird);

// no paramiter.
const getPi = () => Math.PI

console.log(getPi());


// large arrow funtion.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum * mult;
    return result;
}
const math = doMath(10, 4, 50)
console.log(math)