/**
 * 把参数argument转化为一个对象
 * @param argument
 */
function ToObject(argument: any): Object {
    if (argument === null) {
        throw new TypeError("argument cannot be Null")
    } else if (argument === undefined) {
        throw new TypeError("argument cannot be Undefined")
    } else if (typeof argument === "object") {
        return argument
    } else {
        return new Object(argument)
    }
}

export default ToObject