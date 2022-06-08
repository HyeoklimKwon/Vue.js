<template>
    <div>
        <h1>점심메뉴</h1>
        <button @click="pickLunch">pick lunch</button>
        <p>{{ pickedLunch }}</p> 

        <h2> 로또를 뽑아보자 </h2>
        <button @click="pickLotto">Pick Lotto</button>

    </div>
</template>

<script>
import _ from 'lodash'

export default {
    data()  {
        // 리턴으로 감싸야 개별적으로 변수 사용 가능
        return {
            lunchMenu : ['낙지수제비', '들깨수제비', '칼국수'],
            pickedLunch: ''
        }

    },
    methods: {
        pickLunch() {            
            this.pickedLunch = _.sample(this.lunchMenu)
        },
        pickLotto() {
            this.$router.push({name : 'lotto'})
            
        }
    }

}
</script>

<style>

</style>