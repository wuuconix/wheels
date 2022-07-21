//@ts-nocheck

Function.prototype.Apply = function(thisArg, ...args) {
    if (typeof this != "function") {
        throw "Apply must call from a function"
    }
    thisArg = thisArg ?? globalThis
    const obj = new Object(thisArg)
    const key = Symbol()
    obj[key] = this
    const result = obj[key](...args)
    delete obj[key]
    return result
}

const obj = {
    name: "wuuconix"
}

function test() {
    console.log(this.name)
}

test.Apply(obj)