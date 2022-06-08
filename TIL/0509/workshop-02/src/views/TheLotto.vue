<template>
<div>
    <h1>로또</h1>
    <button @click= "getLuckyNumbers" >getLuckyNumbers</button>
    <p>{{ selectedNumbers }}</p>
</div>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
        return {
            selectedNumbers: []
        }

    },
    methods: {
        getLuckyNumbers() {
            this.selectedNumbers = _.sortBy(_.sampleSize(_.range(1, 46), 6))
        }
    }

}
</script>

<style>

</style>