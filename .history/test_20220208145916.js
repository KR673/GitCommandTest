let a = {}
let b = {a : '1', b : '2'}
a.prototype = b

console.log(b)
console.log(a.b)