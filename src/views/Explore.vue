<template>
  <div class="explore">
    发现页面
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'explore',
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
