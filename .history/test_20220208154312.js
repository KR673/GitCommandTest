let AFac = function(a,b) {this.a = a; this.b = b}
let b = {a : '1', b : '2'}
let c = Object.create(b)
let a = new AFac(1,2)
// a.__proto__.prototype = c.prototype

console.log('c', c.a);
console.log('a', a.a);