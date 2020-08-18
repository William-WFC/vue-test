class DeepClone {

    clone(source) {
        if (source instanceof Object) {
            let target;
            if (source instanceof Array) {
                target = new Array(...source);
            } else if (source instanceof Function) {
                target = function () {
                    return source.apply(this, arguments);
                };
            } else if (source instanceof Date) {
                target = new Date(source);
            } else if (source instanceof RegExp) {
                target = new RegExp(source.source, source.flags);
            } else {
                target = {};
                for (let key in source) {
                    if (source.hasOwnProperty(key)) { // 不拷贝原型上的属性，太浪费内存
                        target[key] = this.clone(source[key]); // 递归克隆
                    }
                }
            }
            return target;
        } else {
            return source;
        }
    }
}

function deepClone(source) {
    if (source instanceof Object) {
        let target;
        if (source instanceof Array) {
            target = new Array(...source);
        } else if (source instanceof Function) {
            target = function () {
                return source.apply(this, arguments);
            };
        } else if (source instanceof Date) {
            target = new Date(source);
        } else if (source instanceof RegExp) {
            target = new RegExp(source.source, source.flags);
        } else {
            target = {};
            for (let key in source) {
                if (source.hasOwnProperty(key)) { // 不拷贝原型上的属性，太浪费内存
                    target[key] = deepClone(source[key]); // 递归克隆
                }
            }
        }
        return target;
    } else {
        return source;
    }
}


var dc = new DeepClone();
var source = {
    arr: [1,2,3],
    obj: {
        a1: [4,5,6],
        a2: true,
    },
    fn: function (a) {
        console.log(a)
    },
    reg: /abc/g,
    a: null,
    b: undefined,
};
var rl1 = dc.clone(source);
var rl2 = deepClone(source);
console.log(rl2);

class EventHub {
    cache = {};
    on(eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }
    emit(eventName) {
        this.cache[eventName].forEach(fn => fn())
    }
    off(eventName, fn) {
        var fns = this.cache[eventName];
        if (!fns) {
            return;
        }
        if (fn) {
            let idx = fns.indexOf(fn);
            if (idx > -1) {
                fns.splice(idx, 1)
            }
        } else {
            this.cache[eventName] = [];
        }
    }

}

class Promise2 {
    state = "pending";
    callbacks = [];
    constructor(fn) {
        if (typeof fn !== "function") {
            throw new Error("must pass function");
        }
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result) {
        if (this.state !== "pending") return;
        this.state = "fulfilled";
        nextTick(() => {
            this.callbacks.forEach((handle) => {
                if (typeof handle[0] === "function") {
                    handle[0].call(undefined, result);
                }
            });
        });
    }
    reject(reason) {
        if (this.state !== "pending") return;
        this.state = "rejected";
        nextTick(() => {
            this.callbacks.forEach((handle) => {
                if (typeof handle[1] === "function") {
                    handle[1].call(undefined, reason);
                }
            });
        });
    }
    then(succeed, fail) {
        const handle = [];
        if (typeof succeed === "function") {
            handle[0] = succeed;
        }
        if (typeof fail === "function") {
            handle[1] = fail;
        }
        this.callbacks.push(handle);
    }
}
function nextTick(fn) {
    var counter = 1;
    var observer = new MutationObserver(fn);
    var textNode = document.createTextNode(String(counter));

    observer.observe(textNode, {
        characterData: true,
    });
    counter += 1;
    textNode.data = String(counter);
}

var ps = new Promise2(function (resolve, reject) {
    setTimeout(function () {
        resolve(22)
    }, 1000)
});

function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len-1-i;j++){
            if (arr[j]>arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr = [5,6,7,3,2,8];
console.log(bubbleSort(arr));

class MyTest {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.toHello = function () {
            console.log(this.x)
        }
    };
    toHello(){
        console.log(this.y)
    };
}

let my1 = new MyTest(1,2);
