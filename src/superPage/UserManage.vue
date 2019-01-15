<template>
  <div>
    <Table stripe :columns="columns1" :data="data"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:[],
       columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '性别',
                        key: 'address'
                    }
                ],
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods:{}
}

</script>
<style>
</style>