<template>
    <div class="test3">
        <div id="hd">hdhd</div>
        <div id="bd">
            <div class="main">main</div>
            <div class="sub">sub</div>
            <div class="extra">extra</div>
        </div>
        <div id="ft">ftft</div>
        <div class="wrap">
            <div class="fl">
                <div class="div">这是div - 1</div>
                <div class="div">这是div - 2</div>
            </div>
            产生一个 BFC 生一个 BFC 容器产生一个 BFC 容器产生一个 BFC 容器产生一个 BFC 容器
        </div>
        <div class="t1">
            <div class="a">
                <div class="a-inner">产生一个 BFC 生一个 BFC 容器产生一个 BFC 容器产生一个 BFC 容器产生一个 BFC 容器</div>
            </div>
            <div class="b">b</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test3',
    mounted() {
        // $clamp(this.$refs.line, {clamp: 3, useNativeClamp: false})
        // window.findReverseSize = this.findReverseSize;
        //
        // function someFn(i = 0, nums = []) {
        //     nums.push(i);
        //     console.log(i);
        //     console.log(nums);
        // }
        //
        // someFn(1);
        // someFn(1);
        // var n = 10;
        // while (n--) {
        //     console.log(n);
        //     if (n < 5) {
        //         break
        //     }
        // }
    },
    methods: {
        findReverseSize(arr) {
            if (!arr || !Array.isArray(arr)) {
                return '请输入数组'
            }
            let len = arr.length;
            let i;
            let reverseSize = 0;
            for (i = 0; i < len - 1; i++) {
                let j;
                for (j = i; j < len; j++) {
                    if (arr[i] > arr[j]) {
                        reverseSize++;
                    }
                }
            }
            return reverseSize;
        },
        writeAjax(url, callback) {
            let httpRequest = null;
            if (window.XMLHttpRequest) {
                httpRequest = new window.XMLHttpRequest()
            } else if (window.ActiveXObject) {
                httpRequest = new window.ActiveXObject('Microsoft.XMLHTTP');
            }
            httpRequest.open('GET', url, true);
            httpRequest.setRequestHeader('Content-Type', 'application/json');
            httpRequest.onreadystatechange(state => {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200 || httpRequest.status === 304) {
                        callback.call(httpRequest.responseText)
                    }

                }
            });
            httpRequest.send();
        },
        writeBind() {

            function bind1(thisArg, ...arg) {
                let fn = this;
                return function (...arg2) {
                    return fn.call(thisArg, ...arg, ...arg2)
                }
            }

            function bind2(asThis) {
                var slice = Array.prototype.slice;
                var arg1 = slice.call(arguments, 1);
                var fn = this;
                return function () {
                    var arg2 = slice.call(arguments, 0);
                    return fn.apply(asThis, arg1.concat(arg2))
                }
            }
        },
        writeClone() {
            function clone(obj) {
                return JSON.parse(JSON.stringify(obj));
            }

            function deepClone(source) {
                if (source instanceof Object) {
                    let target;
                    if (source instanceof Array) {
                        target = new Array();
                    } else if (source instanceof Function) {
                        target = function () {
                            return source.apply(this, arguments);
                        };
                    } else if (source instanceof Date) {
                        target = new Date(source);
                    } else if (source instanceof RegExp) {
                        target = new RegExp(source.source, source.flags);
                    }
                    for (let key in source) {
                        if (source.hasOwnProperty(key)) { // 不拷贝原型上的属性，太浪费内存
                            target[key] = deepClone(source[key]); // 递归克隆
                        }
                    }
                    return target;
                }
            }
        },
        testFn(...arg) {
            console.log(...arg);
        },
        t2Fn(first) {
            var slice = Array.prototype.slice;
            var args1 = slice.call(arguments, 1);
            console.log(first, args1);
        },

    }
}
</script>

<style lang="scss" scoped>
.test3 {
    .t1 {
        display: inline-flex;
        width: 400px;
        height: 200px;
        background-color: #eee;
        & > div {
            flex: 1 0;
            &.a {
                flex: 1;
                .a-inner {
                    /*width: 250px;*/
                }
                background-color: #aaa;
            }
            &.b {
                width: 200px;
                background-color: chartreuse;
            }
        }
    }
    .wrap {
        background-color: #ccc;
    }
    .fl {
        /*float: none;*/
        /*overflow: hidden;*/
        background-color: yellow;
    }
    .fl > div {
        border: 1px solid #333;
    }

    #bd {
        padding: 0 190px 0 190px;
    }
    .main {
        float: left;
        width: 100%;
    }
    .sub {
        float: left;
        width: 190px;
        margin-left: -100%;
        position: relative;
        left: -190px;
    }
    .extra {
        float: left;
        width: 190px;
        margin-left: -190px;
        position: relative;
        right: -190px;
    }
}
</style>
