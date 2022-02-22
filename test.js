let AFac = function(a,b) {this.a = a; this.b = b}
let BFac = function(a,b) {this.a = a + 1; this.b = b + 1, this.c = 'c'}

// BFac.prototype = Object.create(AFac.prototype)
// a.__proto__.prototype = c.prototype

let b = new BFac(1,2)
console.log(b.constructor == BFac)
console.log(BFac.prototype.constructor == BFac)
console.log(BFac.constructor == Function)


console.log(Function.prototype.__proto__ == Object.prototype)

console.log(Function.__proto__ === Function.prototype)
console.log(Function.constructor === Function)

console.log(Object.__proto__ === Function.prototype)
console.log(Object.constructor === Function)
console.log(Array.prototype)
console.log(String.prototype)
console.log(Number.prototype)
console.log(Number.prototype === Number)
console.log(Array.prototype === Object.prototype)
console.log(typeof(AFac))
console.log(typeof(AFac))

// console.log(b.a, b.b, b.c);