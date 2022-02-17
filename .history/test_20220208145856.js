let a = {}
let b = {a : '1', b : '2'}
a.prototype = Object.create(b)

console.log(b)
console.log(a.a)