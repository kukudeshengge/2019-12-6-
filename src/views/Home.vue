<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <div class="footer">
      <router-link to="/home/one">一</router-link>
      <router-link to="/home/two">二</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>


<style lang="scss">
  .footer{
    width: 100%;
    height: 40px;
    display: flex;
    background: green;
    position: absolute;
    bottom: 0;
    left: 0;
    a{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black
    }
  }
</style>