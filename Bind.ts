// @ts-nocheck
Function.prototype.Bind = function(thisArg, ...args1) {
    const fn = this
    if (typeof fn != "function") {
        throw "Function.prototype.Bind must called from a function"
    }
    return function boundFn(...args2) {
        const args = [...args1, ...args2]
        if (this instanceof boundFn) { //new调用
            return new fn(...args)
        } else { //正常调用
            return fn.apply(thisArg, args)
        }
    }
}

function test(...args) {
    for (let arg of args) {
        this[arg] = arg
    }
    console.log(this)
}

let obj = {
    name: "obj"
}

const boundTest = test.Bind(obj, "1")

//普通调用
boundTest("2")

//new调用 忽略之前绑定的this
const t = new boundTest("2")
