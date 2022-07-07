"use strict"
import Type from "./Type"
import ToObject from "./ToObject"

/**
 * 判断某个某个原型是否是某个实例的原型
 * 
 * 参考规范 https://262.ecma-international.org/13.0/#sec-object.prototype.isprototypeof
 * @param V 你需要判断原型的那个实例
 * 
 * 例子：isPrototypeOf.call(String.prototype, new String("123"))
 */
function isPrototypeOf(V: any): Boolean {
    if (Type(V) != "Object") {
        return false
    }
    let O = ToObject(this)
    while (1) {
        V = Object.getPrototypeOf(V)
        if (V === null) {
            return false
        } else if (O === V) { //规范使用SameValue算法 和 IsStrictlyEqual 不太一样 这里为了简单就直接判断是否全等了
            return true
        }
    }
    return false
}

// console.log(String.prototype.isPrototypeOf(new String("123")))
// console.log(isPrototypeOf.call(String.prototype, new String("123")))