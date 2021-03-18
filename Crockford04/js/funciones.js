if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        let F = function () {}
        F.prototype = o
        return new F()
    }
}


const add = function (x, y) {
    return x + y
}

// El objeto 'this' parece funcionar igual declarando el objeto 
// tanto con 'var' como con 'let'. 
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1
    },
    getValue: function () {
        return this.value
    }
}

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

//console.clear()

// myObject.double = function () {
//     let that = this

//     const helper = function () {
//         that.value = add(that.value, that.value)
//     }

//     helper()
// }

// La operabilidad de 'this' en la adición de un nuevo método al 
// objeto parece funcionar bien tanto trabajando directamente 'this' 
// como con la variable auxiliar 'that'. 
myObject.double = function () {
    console.log(this)
    this.value = add(this.value, this.value)
}

myObject.double()
console.log(myObject.getValue())

//console.clear()

var Quo = function (string) {
    this.status = string
}
Quo.prototype.get_status = function () {
    return this.status
}

var myQuo = new Quo("confused")

console.log(myQuo.get_status())

//console.clear()

