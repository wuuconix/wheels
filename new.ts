/* 简单模拟new */
function New(Cons: Function, ...args: any[]): any {
    const obj = {}
    Object.setPrototypeOf(obj, Cons.prototype)
    const result = Cons.apply(obj, args)
    return result instanceof Object ? result : obj
}

/* typescript 中可以注解this 它始终位于第一个参数 */
function C(this: any, name: string, blog: string, bilibili: string) {
    this.name = name ?? "wuuconix"
    this.blog = blog ?? "https://wuuconix.link"
    this.bilibili = bilibili ?? "https://url.wuuconix.link/b23"
}

console.log(New(C, "conix"))