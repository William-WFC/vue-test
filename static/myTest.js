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

