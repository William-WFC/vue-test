<template>
  <div class="sidebar">
      <ul class="ul">
          <li class="li" v-for="(router, index) in routers" :key="index">
              <router-link :to="router.path">{{router.name}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
    const routers = [
        {
            name: '首页',
            path: '/'
        },
        {
            name: 'A',
            path: '/a'
        },
        {
            name: 'B',
            path: '/b'
        },
        {
            name: 'C',
            path: '/c'
        },
        {
            name: 'D',
            path: '/d'
        }
    ];
    export default {
        name: 'sidebar',
        data() {
            return {
                routers,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        position: fixed;
        z-index: 100;
        background: #eee;
        top: 50px;
        .ul{
            padding-top: 350px;
            .li {
                line-height: 30px;
            }
        }
    }

</style>
