const a = [1, 2, 3, 4, 5]

a.forEach(n => {console.log(n)})
const newA = a.map(n => n * 2)
const foundEl = a.find(i => {return i > 2})

const isTrue = a.some(n => n > 2)

const isTrueForEvery = a.every(n => n > 0)

const result = a.reduce((input, n) => input + n, 1)

console.log(result)

const items = [
    {price: 10},
    {price: 20},
    {price: 40},
    {price: 60}
]
const totalPrice = items.reduce((inp, n) => inp + n.price, 0)
console.log('totalPrice ' + totalPrice)
items.forEach(n => console.log(n.price))

const isInclude = a.includes(2)

console.log(isInclude)