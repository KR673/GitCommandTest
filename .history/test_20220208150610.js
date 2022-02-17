let a = function () { return 1 + 1}
let b = {a : '1', b : '2'}
let c = Object.create(b)
// a.prototype = Object.create(c.prototype)

console.log(a.a);