<template>
  <div>
    <h2>{{titleData.name}}</h2>
  </div>
</template>

<script>
export default {
    computed:{
        titleData(){
            return this.$store.state.listData[1]
        }
    }
}
</script>