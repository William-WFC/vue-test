<template>
  <p class="filter" :id="rawId | formatId('-end') | unFormatId('Raw')">
    <span @click="saySomething('clicked')">
    {{content | trim | addPreFix}}
    </span>
    <button class="back" @click="toBack">back</button>
  </p>
</template>

<script>
  export default {
    name: 'filters',
    data() {
      return {
        content: '  hello world  ',
        rawId: 'FilterIdTestABC',
      }
    },
    filters: {
      addPreFix(value) {
        return 'pre-fix' + value;
      },
      formatId(value, fix) {
        let first = value.slice(0, 1).toLowerCase();
        let last = value.slice(1).replace(/[A-Z]/g, function (select) {
          return '-' + select.toLowerCase();
        });
        return first + last + fix;
      },
      unFormatId(value, fix) {
        let first = value.slice(0, 1).toUpperCase();
        let last = value.slice(1).replace(/-(.)/g, function (select, exec1) {
          return exec1.toUpperCase();
        });
        return first + last + fix;
      }
    },
    methods: {
      saySomething(word) {
        window.alert(word)
      },
      toBack() {
        console.log('toBack');
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
  .filter {
    background-color: aliceblue;
    text-align: left;
  }

  .back {

  }

</style>
