<template>
  <li @click="setSelectedVideo">
    <img :src="video.snippet.thumbnails.default.url" alt="">
    {{ video.snippet.title | unescapedText }}
  </li>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
created() {
  console.log(this.video.snippet.thumbnails.default.url);
},
  methods: {
    setSelectedVideo(){
      this.$emit('set-selected-video', this.video)
    }
},
filters: {
  unescapedText(rawText) {
    return _.unescape(rawText)
  }
}
}
</script>

<style>

</style>