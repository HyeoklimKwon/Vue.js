<template>
  <div id="app">
    <h2>My first youtube project</h2>
    <TheSearchBar @set-input-value="setInputValue" />
    <VideoDetail v-if="selectedVideo"
                :selectedVideo = "selectedVideo"
    />
    <VideoList 
      :videos="videos"
      @set-selected-video = "setSelectedVideo"
     />
  </div>
</template>

<script>
import axios from 'axios'

import TheSearchBar from '@/components/TheSearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data() {
    return {
      inputValue: '',
      videos: [],
      selectedVideo : {}
    }
  },
  methods: {
    setInputValue(newValue) {
      this.inputValue = newValue

      // 요청
      const API_URL = 'https://www.googleapis.com/youtube/v3/search'
      const config = {
        params: {
          key: 'AIzaSyCymcXcXQMs4rRVgDT_1mWTZaSRK9OPAvk',
          part: 'snippet',
          type: 'video',
          q: this.inputValue
        }
      }

      axios.get(API_URL, config)
        .then(response => {
          this.videos = response.data.items
        })
    },
    setSelectedVideo(newselectedVideo) {
      this.selectedVideo = newselectedVideo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
