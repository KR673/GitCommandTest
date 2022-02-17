let AFac = function(a,b) {this.a = a; this.b = b}
let BFac = function(a,b) {this.a = a + 1; this.b = b + 1, this.c = 'c'}

// BFac.prototype = Object.create(AFac.prototype)
// a.__proto__.prototype = c.prototype

let b = new BFac(1,2)
console.log(b.constructor == BFac)
console.log(BFac.prototype.constructor == BFac)
console.log(BFac.constructor == Function)
console.log(Function.constructor === Function)
console.log(Function.__proto__ === Object)
// console.log(b.a, b.b, b.c);