let a = function () { return 1 + 1}
let b = {a : '1', b : '2'}
let c = Object.create(b)
a.__proto__.prototype = c.prototype

console.log('c', c.a);
console.log('a', a.a);