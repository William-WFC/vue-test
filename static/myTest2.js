// 防抖、节流

function debounce(fn, delay) {
    let timeout = null;
    let context = this;
    return function () {
        if (timeout) {
            clearTimeout(timeout)
        }
        let arg = arguments;
        timeout = setTimeout(() => {
            fn.apply(context, arg);
        }, delay)
    }
}
window.onscroll = debounce(function () {
    console.log('debounce')
}, 2000);

function throttle(fn, delay) {
    let preTime = Date.now();
    let context = this;
    return function () {
        let arg = arguments;
        let curTime = Date.now();
        if (curTime - preTime > delay) {
            fn.apply(context, arg);
            preTime = curTime;
        }
    }
}
window.onscroll = throttle(function () {
    console.log('throttle')
}, 2000);
