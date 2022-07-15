// @ts-nocheck

/**
 * 节流函数 时间戳写法
 * @param fn 被节流的函数
 * @param delay 时间频率 单位ms
 */
 function throttle(fn: Function, delay: number) {
    let prevTime = 0

    return function(...args) {
        const curTime = Date.now()
        if ((curTime - prevTime) > delay) {
            prevTime = curTime
            return fn.apply(null, args)
        }
    }
}

/**
 * 节流函数 计时器写法
 * @param fn 被节流的函数
 * @param delay 时间频率 单位ms
 */
function throttle2(fn: Function, delay: number) {
    let timer: null | number = null
    
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null
                return fn.apply(null, args)
            }, delay)
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
        for (let i = 0; i < 1000; i++) {
            console.log(`${i} try`)
            console.log("fuck you")
            await sleep(100)
        }
    } else if (mode == 1 || mode == 2) { //节流
        console.log("节流调用")
        const throttledLog = mode == 1 ? throttle(console.log, 1000) : throttle2(console.log, 1000)
        for (let i = 0; i < 1000; i++) {
            console.log(`${i} try`)
            throttledLog("fuck you")
            await sleep(100)
        }
    }
}

//参数列表 0 | 1 | 1
//程序编译运行 tsc throttle.ts --lib es2015,dom ; node throttle.js
main(2)