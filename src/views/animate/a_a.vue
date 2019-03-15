<template>
    <div class="a_a">
        <div class="before">1</div>
        <div class="before">2</div>
        <div class="before">3</div>
        <div class="content">
            <div class="box">
                <div class="inner">
                    <ul class="ul">
                        <li class="li">1</li>
                        <li class="li">2</li>
                        <li class="li">3</li>
                        <li class="li">4</li>
                        <li class="li">5</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'a_a',
    }
</script>

<style lang="scss" scoped>
    .a_a {
        /*background: orangered;*/
        min-height: 100vh;
        .content {
            text-align: center;
            .box {
                /*margin: 0 auto;*/
                width: auto;
                position: relative;
                overflow: visible;
                display: inline-block;
                /*width: 200px;*/

                .inner {
                    display: inline-block;
                    .ul {
                        display: flex;
                        .li {
                            width: 20px;
                        }
                    }
                }
                .img {
                    position: absolute;
                    top: 0;
                    right: -100px;
                }

            }
        }
    }
</style>
