<template>
    <div id="app">
        <transition name="slide-fade">
            <router-view class="box"/>
        </transition>

        <!--<sidebar></sidebar>-->
    </div>
</template>

<script>
    import Navi from './views/Navi.vue';
    import Header from './views/Header';
    import Footer from './views/Footer';
    import sidebar from './views/home/sidebar'

    export default {
        name: 'app',
        components: {Navi, Header, Footer, sidebar},
        data() {
            return {
                a: 'a',
                b: 'b',
            }
        },
        created() {
            // this.$router.push('/directives');
        },
        mounted() {
            window.onbeforeprint = function() {
                console.log('onbeforeprint');
            };
            window.onafterprint = function(e) {
                console.log(e, 'onafterprint');
                this.close(); // 打印之后关闭页面
            };
            this.$router.push('/test4');
            // window.print(); // 打印
        }
    }
</script>

<style lang="scss">
    html,body {
        width: 100%;
        height: 100%;
    }
    .test {
        position: fixed;
        bottom: 30px;
        width: 50%;
        background-color: blue;
        color: white;
        height: 50px;
    }

    #app {
        width: 100%;
        height: 100%;
        position: relative;
        .navi {
            position: fixed;
        }
    }

    .clear::before {
        content: '';
        display: block;
        clear: both;
    }

    .clear::after {
        content: '';
        display: block;
        clear: both;
    }
    .box {
        /*float: left;*/
        overflow: hidden;
        width: 100%;
        position: absolute;
        top: 0;
    }

    .slide-fade-enter-active {
        transition: all 0.5s ;

    }

    .slide-fade-leave-active {
        /*transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
        transition: all 0.5s ;
    }

    .slide-fade-enter {
        transform: translateX(100%);

        /*opacity: 0;*/
    }
    .slide-fade-leave-to {
        transform: translateX(-100%);
    }
</style>
