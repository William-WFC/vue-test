<template>
    <div class="svg">
        <div id="timeCountX" class="time-count-x">
            <svg width="440" height="440" viewBox="0 0 440 440" class="center">
                <defs>
                    <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
                        <stop offset="0%" stop-color="#e52c5c"></stop>
                        <stop offset="100%" stop-color="#ab5aea"></stop>
                    </linearGradient>
                    <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient2">
                        <stop offset="0%" stop-color="#4352f3"></stop>
                        <stop offset="100%" stop-color="#ab5aea"></stop>
                    </linearGradient>
                </defs>
                <g transform="matrix(0,-1,1,0,0,440)">
                    <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#f0f1f5" fill="none" stroke-dasharray="1069 1069"></circle>
                    <circle cx="220" cy="220" r="170" stroke-width="50" stroke="url('#gradient1')" fill="none" stroke-dasharray="1069 1069"></circle>
                    <circle cx="220" cy="220" r="170" stroke-width="50" stroke="url('#gradient2')" fill="none" stroke-dasharray="534.5 1069"></circle>
                </g>
            </svg>
            <span id="timeSecond" class="time-second"></span>
        </div>
        <div class="img-box">
            <div class="inner">
                12345
                <img src="~IMG/timg.jpg" alt="" class="img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
    }
</script>

<style lang="scss" scoped>
    .svg {
        /*margin: 0 auto;*/
        margin-left: 200px;
    }
    svg {
        transform: rotate(-0.05deg);
    }
    circle {
        transition: stroke-dasharray .2s;
    }
    .time-count-x {
        line-height: 1.5;
        position: relative;
    }
    .time-second {
        position: absolute;
        top: 50%; left: 0; right: 0;
        margin-top: -.75em;
        text-align: center;
        font-size: 100px;
    }
    .img-box {
        width: 100%;
        height: 100px;
        position: relative;
        display: flex;
        .inner {
            position: absolute;
            margin: 0 auto;
            width: 50px;
            height: 50px;
            background-color: bisque;
            z-index: 10;
            .img {
                width: 100px;
                height: 100px;
                position: absolute;
                top: 0;
            }
        }

    }
</style>
