<template>
  <div>
    <h2>VideoList</h2>
    <ul>
      <VideoListItem
        v-for="video in videos"
        :key="video.id.videoId"
        :video="video"
        @set-selected-video = "setSelectedVideo"
      />
    </ul>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
  components: {
    VideoListItem,
  },
  props: {
    videos: {
      type: Array,
      required: true,
    }
  },
  methods: {
    setSelectedVideo(newSelectedVideo){
      this.$emit('set-selected-video', newSelectedVideo)
    }
  }
}
</script>

<style>

</style>