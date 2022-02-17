let a = {}
let b = {a : '1', b : '2'}
let c = Object.create(b)

console.log(b)
console.log(c.a)