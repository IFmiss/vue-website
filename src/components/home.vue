<template>
  <div class="maincontent">
    <fixed-bg v-if="imageInfo && imageSetting" :imagepath="'http://www.bing.com' + imageInfo.url" :maskcolor="imageSetting.bgcolor" :maskopacity="imageSetting.opactity"></fixed-bg>
  </div>
</template>

<script>
import store from '../store'
import fixedbg from './common/fixedbg/fixedbg.vue'
export default {
  computed: {
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    imageSetting () {
      return store.getters.getFixedBgInfo
    }
  },
  components: {
    'fixed-bg': fixedbg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
