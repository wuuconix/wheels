/**
 * 防抖函数 简单实现
 * @param fn 被防抖的函数
 * @param delay 时间频率 单位ms
 * @param immediate 周期内第一次触发是否立刻执行
 */
function debounce(fn: Function, delay: number, immediate: boolean = false) {
    let timer: number | undefined

    return function(...args) {
        clearTimeout(timer)
        if (!immediate) { //不立刻执行
            timer = setTimeout(() => {
                return fn.apply(this, args)
            }, delay)
        } else { //立刻执行
            const flag = !timer //第一次是undefined flag为true，会立刻触发
            timer = setTimeout(() => {
                timer = undefined
            }, delay)
            if (flag) {
                return fn.apply(this, args)
            }
        }
    }
}

/**
 * 休眠函数
 * @param time 单位ms
 */
 async function sleep(time: number) {
    await new Promise(resolve => setTimeout(resolve, time))
}

/**
 * 模拟函数调用 1秒钟调用一次
 * @param mode 0为正常函数调用，1为节流后的效果
 */
async function main(mode: number) {
    if (mode == 0) { //正常
        console.log("正常调用")
        for (let i = 0; i < 30; i++) {
            console.log(`${i} try`)
            console.log("fuck you")
            await sleep(100)
            if (i == 14) {
                await sleep(1500)
            }
        }
    } else if (mode == 1) { //防抖
        console.log("防抖调用_第一次不立刻触发")
        const debouncedLog = debounce(console.log, 1000)
        for (let i = 0; i < 30; i++) {
            console.log(`${i} try`)
            debouncedLog("fuck you")
            await sleep(100)
            if (i == 14) {
                await sleep(1500)
            }
        }
    } else if (mode == 2) { //防抖_第一次立刻触发
        console.log("防抖调用_第一次立刻触发")
        const debouncedLog = debounce(console.log, 1000, true)
        for (let i = 0; i < 30; i++) {
            console.log(`${i} try`)
            debouncedLog("fuck you")
            await sleep(100)
            if (i == 14) {
                await sleep(1500)
            }
        }
    }
}

//参数列表 0 | 1 | 2
//程序编译运行 tsc debounce.ts --lib es2015,dom ; node debounce.js
main(0)
