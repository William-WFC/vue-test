<template>
    <div id="app">
        <router-link to="inline" class="tags-li-title">
            to inline
        </router-link>
        <router-link to="async" class="tags-li-title">
            to async
        </router-link>

        <router-view/>
    </div>
</template>

<script>
    import Navi from './views/Navi.vue';
    import Header from './views/Header';
    import Footer from './views/Footer';

    export default {
        name: 'app',
        components: {Navi, Header, Footer},
        data() {
            return {
                a: 'a',
                b: 'b',
            }
        },
        created() {
        }
    }
</script>

<style lang="scss">

    #app {
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
</style>
