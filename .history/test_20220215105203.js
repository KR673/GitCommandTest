let AFac = function(a,b) {this.a = a; this.b = b}
let BFac = function(a,b) {this.a = a + 1; this.b = b + 1, this.c = 'c'}

// BFac.prototype = Object.create(AFac.prototype)
// a.__proto__.prototype = c.prototype

let b = new BFac(1,2)
console.log(b.constructor == BFac)
console.log(BFac.prototype.constructor == BFac)
console.log(BFac.constructor == Function)
console.log(Function.constructor === Function)
console.log(Function.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.prototype)
console.log(Object.constructor === Function)
console.log(Object.__proto__)
console.log(Object.prototype)
console.log(Object.prototype === Function.prototype)
// console.log(b.a, b.b, b.c);