<template>
  <div>
    <h2>VideoDetail</h2>
    <iframe 
      id="player" 
      type="text/html" 
      width="640" height="360"
      :src="`http://www.youtube.com/embed/${selectedVideo.id.videoId}`"
      frameborder="0">
      </iframe>
    <h2> {{ selectedVideo.snippet.title }}</h2>
    <p> {{ selectedVideo.snippet.description }}</p>
  </div>
</template>

<script>
export default {
  props : {
    selectedVideo : {
      type: Object,
      required : true,
    }
  }

}
</script>

<style>

</style>