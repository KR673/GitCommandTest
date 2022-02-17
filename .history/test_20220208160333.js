let AFac = function(a,b) {this.a = a; this.b = b}
let BFac = function(a,b) {this.a = a + 1; this.b = b + 1}

BFac.prototype = Object.create(AFac.prototype)
// a.__proto__.prototype = c.prototype

let b = new BFac(1,2)
console.log(b.a, b.b);