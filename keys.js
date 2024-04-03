const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
    habu: 10,
}
// object.keys
const keys = Object.keys(glass)
console.log(keys)


// object.values
const values = Object.values(glass)
console.log(values)

// object.entries
const entries = Object.entries(glass)
console.log(entries)

// delete
delete glass.isCleaned;
console.log(glass)

// destucturing delete
const {habu, ...nabu} = glass;
console.log(nabu)

// object.freeze.
Object.freeze(glass)
glass.source = 'bangladesh';
console.log(glass)

// object.seal
Object.seal(glass)
glass.price = 500;
console.log(glass)