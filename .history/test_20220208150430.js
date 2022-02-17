let a = Object.create({name : 'a'})
let b = {a : '1', b : '2'}
let c = Object.create(b)
a.prototype = Object.create(c.prototype)


console.log(a.a);