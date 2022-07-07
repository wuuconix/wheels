/**
 * 返回传入参数x的类型
 * 
 * 类型参照EcmaScirpt2022语言规范 https://262.ecma-international.org/13.0/#sec-ecmascript-data-types-and-values
 * @param x 你想要确定类型的某个变量
 * 
 * 类型首字母大写，比如 Null
 */
function Type(x: any): string {
    if (x === null) {
        return "Null"
    } else if (x === undefined) {
        return "Undefined"
    } else if (typeof x === "object") {
        return "Object"
    } else {
        return (typeof x)[0].toUpperCase() + (typeof x).slice(1)  
    }
}

export default Type

// console.log(Type(null))
// console.log(Type(undefined))
// console.log(Type(1))
// console.log(Type("1"))
// console.log(Type(true))
// console.log(Type(Symbol('1')))
// console.log(Type(1n))
// console.log(Type({wuuconix: "yyds"}))