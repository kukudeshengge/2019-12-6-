<template>
  <div>
      <h2>{{titleData.name}}</h2>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>


<script>
import { Swipe, SwipeItem } from "vant";
export default {
    components:{
        Swipe,SwipeItem
    },
    computed:{
        titleData(){
            return this.$store.state.listData[0]
        }
    }
};
</script>

<style lang="scss">
    .van-swipe{
        width: 100%;
        height: 200px;
    }
</style>