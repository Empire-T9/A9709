<template>
  <div class="mine">
    我的页面
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'mine',
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
