<template>
  <!-- <transition name="el-message-fade"> -->
    <div class="vue-toast">{{title}}</div>
  <!-- </transition> -->
</template>

<script  >
    export default{
      data () {
         return {
             title: 'this is a toast',
             visible: true
         }
      },
      methods: {
          close () {
              setTimeout(() => {
                   this.visible = false
              }, 2000)
          }
      },
      mounted () {
        // this.close()
      }
    }
</script>