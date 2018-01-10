<template>
  <p class="filter" :id="rawId | formatId('-end') | unFormatId('Raw')">
    <span>
    {{content | trim | addPreFix}}
    </span>
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
        let first  = value.slice(0, 1).toUpperCase();
        let last = value.slice(1).replace(/-(.)/g, function (select, exec1) {
          return exec1.toUpperCase();
        });
        return first + last + fix;
      }
    }
  }
</script>

<style lang="scss">
  .filter {
    background-color: aliceblue;
    text-align: left;
  }

</style>
