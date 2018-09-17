<template>
  <div class="folder">
      <folder :folder="folder"/>
  </div>
</template>

<script>
    import folder from './cps/folder';

    export default {
        name: 'folder-box',
        components: {
            folder,
            t2: () => import('../inline_template/cps/t2.vue')
        },
        data() {
            return {
                folder: {
                    name: 'folder1',
                    children: [
                        {
                            name: 'inner1',
                            folder: {
                                name: 'folder2',
                                children: [
                                    {
                                        name: 'inner11',
                                        folder: {
                                            name: 'folder3'
                                        }
                                    },{
                                        name: 'inner12',
                                        folder: {
                                            name: 'folder4'
                                        }
                                    },
                                ]
                            }
                        },{
                            name: 'inner2',
                            folder: {
                                name: 'folder2'
                            }
                        },
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
