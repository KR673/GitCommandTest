let b = {a : '1', b : '2'}
let c = Object.create(b)
// a.prototype.b = 2

console.log(b)
console.log(c)
console.log(c.a)