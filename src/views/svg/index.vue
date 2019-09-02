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
        <svg version="1.1"
             baseProfile="full"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">

            <rect width="100%" height="100%" fill="red" />

            <circle cx="150" cy="100" r="80" fill="green" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

        </svg>

        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
            <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

            <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
            <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

            <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
            <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                      stroke="orange" fill="transparent" stroke-width="5"/>

            <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                     stroke="green" fill="transparent" stroke-width="5"/>

            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
        </svg>

        <svg width="500" height="300" version="1.1" style="background-color: gold">
            <rect x="10" y="10" rx="10" ry="10" width="200" height="100" stroke="blue" fill="skyblue" stroke-width="3"></rect>
            <circle cx="270" cy="60" r="50" stroke="red" fill="skyblue" stroke-width="3"></circle>
            <ellipse cx="410" cy="60" rx="80" ry="50" stroke="skyblue" stroke-width="3" fill="transparent"></ellipse>
            <line x1="10" y1="120" x2="60" y2="140" stroke="red" stroke-width="3"></line>
            <polyline points="60 120 65 130 70 115 75 130 80 125 85 140 90 135 95 150 100 145" stroke="orange" stroke-width="3" fill="transparent"></polyline>
            <polygon points="120 120 220 120 220 170 120 170" stroke-width="3" stroke="blue" fill="orange"></polygon>
            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"></path>
        </svg>

        <svg width="500" height="500" style="background-color: gold">
            <path d="M10 10 L 90 10 L 90 90 L 10 90" fill="transparent" stroke="red" stroke-width="3"/>
            <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
            <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
            <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
            <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
            <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
            <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
            <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
            <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
            <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
            <path d="M210 80 C 240 10, 265 10, 295 80 S 350 150, 380 80" stroke="black" fill="transparent"/>
            <path d="M10 180 Q 95 110 180 180" stroke="black" fill="transparent"/>
            <path d="M10 280 Q 52.5 210, 95 280 T 180 280" stroke="black" fill="transparent"/>
        </svg>
        <a class="talk-play" role="button" href="#">
            <i class="zj-icn zj-play">
                <svg x="0" y="0" width="108px" height="108px" viewBox="0 0 216 216" class="play">
                    <circle clip-path="url(#clipper)" fill="url(#ripple)" cx="108" cy="108" r="140.4"></circle>
                </svg>
                <svg x="0" y="0" width="0" height="0">
                    <defs>
                        <clipPath id="clipper">
                            <circle cx="108" cy="108" r="100.44"></circle>
                        </clipPath>
                        <radialGradient id="ripple">
                            <stop offset="0.534444" stop-color="#fff" stop-opacity="0.25">
                                <animate attributeName="offset" values="0;0.70" begin="0.2s" dur="2.1s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.65111" stop-color="#fff" stop-opacity="0.35">
                                <animate attributeName="offset" values="0.05;0.75" begin="0" dur="2.1s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.872856" stop-color="#fff" stop-opacity="0.25">
                                <animate attributeName="offset" values="0.10;1" begin="0" dur="2.1s" repeatCount="indefinite"></animate>
                            </stop>
                        </radialGradient>
                    </defs>
                </svg>
            </i>
        </a>
    </div>
</template>

<script>
/*
* SVG 贝塞尔曲线：
* 我们从稍微复杂一点的三次贝塞尔曲线C入手，三次贝塞尔曲线需要定义一个点和两个控制点，所以用C命令创建三次贝塞尔曲线，需要设置三组坐标参数：
* C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
* 这里的最后一个坐标(x,y)表示的是曲线的终点，另外两个坐标是控制点，(x1,y1)是起点的控制点，(x2,y2)是终点的控制点。
* S x2 y2, x y (or s dx2 dy2, dx dy)
* S命令可以用来创建与前面一样的贝塞尔曲线，但是，如果S命令跟在一个C或S命令后面，则它的第一个控制点会被假设成前一个命令曲线的第二个控制点的中心对称点。
* 如果S命令单独使用，前面没有C或S命令，那当前点将作为第一个控制点。
*
* 另一种可用的贝塞尔曲线是二次贝塞尔曲线Q，它比三次贝塞尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。
* Q x1 y1, x y (or q dx1 dy1, dx dy)
* 就像三次贝塞尔曲线有一个S命令，二次贝塞尔曲线有一个差不多的T命令，可以通过更简短的参数，延长二次贝塞尔曲线。
* 和之前一样，快捷命令T会通过前一个控制点，推断出一个新的控制点。这意味着，在你的第一个控制点后面，可以只定义终点，就创建出一个相当复杂的曲线。
* 需要注意的是，T命令前面必须是一个Q命令，或者是另一个T命令，才能达到这种效果。如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。
*
* 虽然三次贝塞尔曲线拥有更大的自由度，但是两种曲线能达到的效果总是差不多的。具体使用哪种曲线，通常取决于需求，以及对曲线对称性的依赖程度。
*
* 弧形：
* A rx ry x-axis-rotation large-arc-flag sweep-flag x y
* a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
* 弧形命令A的前两个参数分别是x轴半径和y轴半径
* x-axis-rotation（x轴旋转角度）
* large-arc-flag（角度大小） 和sweep-flag（弧线方向）。
* large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧。sweep-flag表示弧线的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。
* */
    export default {
        name: "index",
    }
</script>

<style lang="scss" scoped>
.talk-play {
    background-color: black;
    pointer-events: none;
    position: absolute;
    left: 150px;
    top: 50px;
    z-index: 3;
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: none 86ms ease-out;
    transition: none 86ms ease-out;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    /*background: transparent;*/
    .zj-play {
        width: 112px;
        height: 112px;
        background: url(https://www.zaojiu.com/assets/images/play.png) 50% no-repeat;
        background-size: 100%;
    }
}
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
        display: none;
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
